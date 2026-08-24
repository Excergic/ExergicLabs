/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|svg|mp4)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: ['**/__tests__/**/*.test.tsx', '**/__tests__/**/*.test.ts'],
};

module.exports = config;
