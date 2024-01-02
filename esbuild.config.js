const esbuild = require("esbuild");

function esbuildPlugins(mode) {
  return [
    {
      name: "startEventPlugin",
      setup: (build) =>
        build.onStart(() => console.log(`${mode}: build started`)),
    },
    {
      name: "endEventPlugin",
      setup: (build) =>
        build.onEnd(({ errors }) =>
          console.log(`${mode}: build ended with ${errors.length} errors`)
        ),
    },
  ];
}

(async function () {
  const buildFunction =
    process.env.NODE_ENV === "development" ? esbuild.context : esbuild.build;
  const serverBuildOptions = {
    entryPoints: ["src/server/index.js"],
    outfile: "dist/server.js",
    platform: "node",
    loader: { ".js": "jsx" },
    bundle: true,
    minify: process.env.NODE_ENV === "production",
    plugins: esbuildPlugins("Server"),
  };
  const viewsBuildOptions = {
    entryPoints: ["src/views/index.jsx"],
    outfile: "dist/assets/app.js",
    loader: { ".js": "jsx" },
    bundle: true,
    minify: process.env.NODE_ENV === "production",
    plugins: esbuildPlugins("Views"),
  };

  const serverCtx = await buildFunction(serverBuildOptions);
  const viewsCtx = await buildFunction(viewsBuildOptions);

  if (process.env.NODE_ENV !== "development") return;
  await serverCtx.watch();
  console.log("Watching Server");
  await viewsCtx.watch();
  console.log("Watching Views");
})();
