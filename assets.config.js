const fsExtra = require("fs-extra");
const fs = require("node:fs");
const chokidar = require("chokidar");
const path = require("path");
const chalk = require("chalk");

function removeAssets(dirToRemove = "dist/assets") {
  try {
    fsExtra.removeSync(dirToRemove);
    console.log(chalk.yellow("Public directory removed successfully"));
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
    console.log(chalk.green("Public directory updated successfully\n"));
  });
}
copyAssets();

function initChokidar() {
  const watcher = chokidar.watch("public", {
    ignoreInitial: true,
    ignored: "public/index.html",
  });

  watcher
    .on("ready", () =>
      console.log(chalk.blue("Chokidar Watching:", watcher.getWatched()))
    )
    .on("unlink", (path) => removeFile(path))
    .on("add", (path) => copyFile(path))
    .on("change", (path, _stats) => {
      removeFile(path);
      copyFile(path);
    })
    .on("error", (error) => console.log("Chokidar Watch Error:", error));

  function copyFile(sourcePath) {
    const destinationPath = path.join("dist/assets", path.basename(sourcePath));
    fs.copyFile(sourcePath, destinationPath, (error) => {
      if (error) return console.log(error);
      console.log(chalk.blue(sourcePath, "copied successfully"));
    });
  }

  function removeFile(sourcePath) {
    const destinationPath = path.join("dist/assets", path.basename(sourcePath));
    try {
      fs.rmSync(destinationPath);
      console.log(chalk.blue(destinationPath, "removed successfully"));
    } catch (error) {
      console.log(error);
    }
  }
}
process.env.NODE_ENV === "development" && initChokidar();
