const fsExtra = require("fs-extra");
const chokidar = require("chokidar");

function removeAssets(dirToRemove = "dist/assets") {
  try {
    fsExtra.removeSync(dirToRemove);
    console.log("Public directory removed successfully");
  } catch (error) {
    console.log(new Error("Error in remove dist/assets directory"));
  }
}
removeAssets();

function copyAssets(
  sourcePath = "public",
  destination = "dist/assets",
  filter = (src) => src !== "public\\index.html"
) {
  fsExtra.copy(sourcePath, destination, { filter }, (error) => {
    if (error)
      return console.log(new Error("Error in update dist/assets directory"));
    console.log("Public directory updated successfully");
  });
}
copyAssets();

function initChokidar() {
  const watcher = chokidar.watch("public", {
    ignoreInitial: true,
    ignored: "public/index.html",
  });

  watcher
    .on("ready", () => console.log("Chokidar watching:", watcher.getWatched()))
    .on("add", (path) => copyAssets())
    .on("change", (path, stats) => console.log("change", path, stats))
    .on("unlink", (path) => console.log("unlink", path))
    .on("addDir", (path) => console.log("addDir", path))
    .on("unlinkDir", (path) => console.log("unlinkDir", path))
    .on("error", (error) => console.log(error));
}

process.env.NODE_ENV === "development" && initChokidar();
