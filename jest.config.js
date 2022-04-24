// WORKING CONFIG
module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    // When changing these, also look at the tsconfig!
    "^types/(.+)$": "<rootDir>/types/$1",
  },
  verbose: true,
  roots: ["<rootDir>"],
  rootDir: "./",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", require("./babel-old.config")],
  },
};

// FAILING CONFIG
// const nextJest = require("next/jest");

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: "./",
// });

// // Add any custom config to be passed to Jest
// const customJestConfig = {
//   // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jest-environment-jsdom",
//   moduleNameMapper: {
//     // When changing these, also look at the tsconfig!
//     "^types/(.+)$": "<rootDir>/types/$1",
//   },
//   transform: {
//     // Use babel-jest to transpile tests with the next/babel preset
//     // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
//     "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", require("./babel-old.config")],
//   },
// };

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// module.exports = createJestConfig(customJestConfig);
