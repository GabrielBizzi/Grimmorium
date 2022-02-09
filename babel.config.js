module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            Components: "./src/Components",
            Screens: "./src/Screens",
            assets: "./src/assets",
            Styles: "./src/Styles",
            app: "./app.json",
          },
        },
      ],
    ],
  };
};
