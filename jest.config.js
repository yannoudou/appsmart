const nextJest = require('next/jest');

// create Jest config (we use a monoripositories)
const createJestConfig = nextJest({ dir: '.' });

// some custom Jest Config
const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    // testRegex: '(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$',
};

//   export it
module.exports = createJestConfig(customJestConfig) 