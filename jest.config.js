module.exports = {
    moduleNameMapper: {
        '^aurelia-binding$': '<rootDir>/node_modules/aurelia-binding',
        // '\\.(css)$': '<rootDir>/test/empty-module.js'
    },
    modulePaths: [
        '<rootDir>/src',
        '<rootDir>/node_modules'
    ],
    moduleFileExtensions: [
        'ts',
        'js',
        'json'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/test/jest-setup.ts'
    ],
    transform: {
        '^.+\\.(css|less|sass|scss|styl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
        '^.+\\.ts$': 'ts-jest'
    },
    testRegex: '\\.test\\.ts$',
    testTimeout: 60000,
    setupFiles: [
        '<rootDir>/test/jest-pretest.ts',
        'jest-localstorage-mock'
    ],
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
        '!**/*.test.{js,ts}',
        '!**/node_modules/**',
        '!**/test/**'
    ],
    coverageDirectory: '<rootDir>/test/coverage-jest',
    coverageReporters: [
        'json',
        'lcov',
        'text',
        'html'
    ],
    globalSetup: "<rootDir>/jest.global-setup.js",
};
