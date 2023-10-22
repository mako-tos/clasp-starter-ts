const { GasPlugin } = require("esbuild-gas-plugin");
const { copyFile } = require("fs/promises");

require("esbuild")
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    plugins: [GasPlugin],
  })
  .catch(() => process.exit(1));

(async () => {
  await copyFile("./appsscript.json", "./dist/appsscript.json");
})();
