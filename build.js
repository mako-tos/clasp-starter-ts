const { GasPlugin } = require("esbuild-gas-plugin");
const {
  copyFile,
  readdir,
  writeFile,
  appendFile,
  readFile,
  rm,
} = require("fs/promises");
const { build } = require("esbuild");

(async () => {
  const ps = [];
  ps.push(
    build({
      entryPoints: ["src/index.ts"],
      bundle: true,
      outfile: "dist/index.js",
      plugins: [GasPlugin],
      minify: true,
    })
  );
  ps.push(
    (async () => {
      const jsFile = "dist/client.js";
      const outputHtml = "dist/client.html";
      await build({
        entryPoints: ["src/client.ts"],
        bundle: true,
        outfile: jsFile,
        minify: true,
      });
      const data = await readFile(jsFile);
      await writeFile(outputHtml, `<script type="text/javascript">`);
      await appendFile(outputHtml, data.toString());
      await appendFile(outputHtml, `</script>`);
      await rm(jsFile);
    })()
  );

  const HTML_DIR = "./src/html";
  const fileNames = await readdir(HTML_DIR);
  for (const fileName of fileNames) {
    ps.push(copyFile(`${HTML_DIR}/${fileName}`, `./dist/${fileName}`));
  }
  ps.push(copyFile("./appsscript.json", "./dist/appsscript.json"));
  await Promise.all(ps);
})();
