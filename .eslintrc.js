module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        browser: true,
        jquery: true,
        node: true
    },
    parser: 'babel-eslint',
    settings: {
        react: {
            version: '15.6.2'
        }
    },
    plugins: [
        'react',
        'class-property'
    ],
    overrides: [
        {
            files: ['**/spec.js', '**/*.spec.js'],
            env: {
                jest: true
            },
            globals: {
                mount: false,
                render: false,
                shallow: false
            }
        }
    ]
};
