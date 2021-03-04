module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/dist/**',
    '!**/*.config.js',
    '!**/vendor/**',
    '!**/main.js',
    '!**/tests/**',
    '!**/coverage/**',
    '!**/src/plugins/**',
    '!**/src/router/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  }
};
