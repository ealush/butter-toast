const path = require('path'),
    appRoot = path.resolve('./');

module.exports = {
    verbose: true,
    rootDir: path.join(appRoot, 'src'),
    collectCoverageFrom: [
        '**/*.{mjs,js}'
    ],
    moduleFileExtensions: [
        'js', 'json', 'jsx', 'mjs'
    ],
    transform: {
        '^.+\\.m?jsx?$': 'babel-jest'
    },
    coveragePathIgnorePatterns: [
        path.join(appRoot, 'src/coverage'),
        path.join(appRoot, 'node_modules')
    ],
    setupTestFrameworkScriptFile: path.join(appRoot, 'configuration/jest.setup.js'),
    snapshotSerializers: [path.join(appRoot, 'node_modules/enzyme-to-json/serializer')]
};
