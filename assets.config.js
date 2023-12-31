const fsExtra = require("fs-extra");
const chokidar = require("chokidar");

function copyAssets(
  sourcePath = "public",
  destination = "dist/assets",
  filter = (src) => src !== "public\\index.html",
  operation = "copy"
) {
  fsExtra[operation](sourcePath, destination, { filter }, (error) => {
    if (error) return console.error("Error in update assets directory");
    console.log("Public directory updated successfully");
  });
}
copyAssets();

if (process.env.NODE_ENV === "development") {
  console.log("Chokidar keep eyes on Public directory");
  chokidar
    .watch("./public")
    .on("add", (path) => copyAssets())
    .on("change", (path, stats) => console.log("change", path, stats))
    .on("unlink", (path) => console.log("unlink", path))
    .on("addDir", (path) => console.log("addDir", path))
    .on("unlinkDir", (path) => console.log("unlinkDir", path));
}
