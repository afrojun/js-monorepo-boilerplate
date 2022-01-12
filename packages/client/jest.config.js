// force timezone to be utc in jest, so there's no difference in tests when running on different machines
process.env.TZ = 'UTC';

module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageDirectory: '<rootDir>/../coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/config',
    '<rootDir>/index.tsx',
    '<rootDir>/reportWebVitals.ts',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.svg': '<rootDir>/__mocks__/svgMock.tsx',
  },
  preset: 'ts-jest',
  rootDir: 'src',
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.ts',
  ],
  testEnvironment: 'jsdom',
  verbose: true,
};
