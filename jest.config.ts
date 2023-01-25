export default {
  testEnvironment: "jsdom",
  collectCoverage: true,
  testMatch: ["**/__tests__/**/*.spec.tsx"],
  moduleFileExtensions: ["js", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__tests__/__mocks__/fileMock.js',
    '.+\\.(svg)(\\?component)?$': '<rootDir>/src/__tests__/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}