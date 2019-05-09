// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  automock: false,
  browser: false,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/index.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: '.nyc_output',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
    'text-summary',
  ],
  dependencyExtractor: null,
  moduleDirectories: [
    'node_modules',
  ],
  resetMocks: true,
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  testPathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  transform: null,
  transformIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  verbose: true,
};
