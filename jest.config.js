module.exports = {
  "roots": [
      "<rootDir>/test",
      "<rootDir>/vendors/route_extentions/test",
  ],
  "transform": {
      "^.+\\.ts$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
  "moduleFileExtensions": [
      "ts",
      "js",
      "json",
      "node"
  ]
}