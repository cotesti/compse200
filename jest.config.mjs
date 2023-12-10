export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverageFrom: [
    "<rootDir>/COMP.SE.200-2023-2024-1-main/**/*.js",
    "!<rootDir>/COMP.SE.200-2023-2024-1-main/src/.internal/**"
  ],
};
