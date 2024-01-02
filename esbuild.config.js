const chalk = require("chalk");
const { context, build } = require("esbuild");

function esbuildPlugins(mode) {
  return [
    {
      name: "startEventPlugin",
      setup: (build) =>
        build.onStart(() =>
          console.log(chalk.yellow(`${mode}: build started`))
        ),
    },
    {
      name: "endEventPlugin",
      setup: (build) =>
        build.onEnd(({ errors }) =>
          console.log(
            chalk.green(`${mode}: build ended with ${errors.length} errors\n`)
          )
        ),
    },
  ];
}

(async function () {
  const nodeENV = process.env.NODE_ENV;
  const buildFunction = nodeENV === "development" ? context : build;
  const commonBuildOptions = {
    loader: { ".js": "jsx" },
    bundle: true,
    minify: nodeENV === "production",
  };
  const serverBuildOptions = {
    entryPoints: ["src/server/index.js"],
    outfile: "dist/server.js",
    platform: "node",
    plugins: esbuildPlugins("Server"),
    ...commonBuildOptions,
  };
  const viewsBuildOptions = {
    entryPoints: ["src/views/index.jsx"],
    outfile: "dist/assets/app.js",
    plugins: esbuildPlugins("Views"),
    ...commonBuildOptions,
  };

  const serverCtx = await buildFunction(serverBuildOptions);
  const viewsCtx = await buildFunction(viewsBuildOptions);

  if (nodeENV !== "development") return;
  await serverCtx.watch();
  console.log("Watching Server");
  await viewsCtx.watch();
  console.log("Watching Views");
})();
