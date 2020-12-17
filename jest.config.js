module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".*\\.(js)$": "babel-jest"
  },
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transformIgnorePatterns: [
      "node_modules/(?!lodash-es/.*)"
  ],
  moduleNameMapper: {
    "^@rita/(.*)": "<rootDir>/src/$1"
  }
}