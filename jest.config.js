module.exports = {
  // use ts-jest preset for testing Typescript files with jest
  preset: "ts-jest",
  //set the test environment to Node.js
  testEnvironment: "node",

  //Define the rood directory for test and modules
  roots: ["<rootDir>/__tests__"],

  // the ts-jest to transform typspti file
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  //Regular expression to fid the test files
  testRegex: ".*\\.(test|spec)\\.(js|ts|jsx|tsx)$",

  moduleFileExtensions: ["ts", "js"],
};
