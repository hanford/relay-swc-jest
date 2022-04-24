module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "relay",
      {
        src: "./",
        artifactDirectory: "./types",
        extensions: ["js", "ts", "tsx"],
        include: ["**/*"],
        schema: "./main.graphql",
        language: "typescript",
      },
    ],
  ],
};
