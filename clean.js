const { rm, readdir } = require("fs/promises");

(async () => {
  const DIST_PATH = "./dist";
  const files = await readdir(DIST_PATH);
  for (const file of files) {
    await rm(`${DIST_PATH}/${file}`);
  }
})();
