const filesUnderTest = [
  'camelCase.js',
  'ceil.js',
  'filter.js',
  'get.js',
  'isLength.js',
  'toNumber.js',
  'toString.js',
  'upperFirst.js',
  'words.js',
  'isDate.js',
  'isEmpty.js',
].map(file => `<rootDir>/COMP.SE.200-2023-2024-1-main/src/${file}`);

export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
  collectCoverageFrom: [
    ...filesUnderTest,
    '!<rootDir>/COMP.SE.200-2023-2024-1-main/src/.internal/**',
  ],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
};
