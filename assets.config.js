const { copy } = require("fs-extra");

copy(
  "public",
  "dist/assets",
  { filter: (src) => src !== "public\\index.html" },
  (error) => {
    if (error) return console.log("Error in copy public directory");
    console.log("Public directory copied successfully");
  }
);
