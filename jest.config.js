module.exports = {
  preset: "ts-jest",
  //set the test environment to Node.js
  testEnvironment: "node",

  //Define the rood directory for test and modules
  roots: ["<rootDir>/tests"],

  // the ts-jest to transform typspti file
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  //Regular expression to fid the test files

  moduleFileExtensions: ["ts", "js"],
};
