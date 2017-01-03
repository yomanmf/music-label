module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'phantomjs': true
    },

    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4],
        'no-console': 'off',
        'no-cond-assign': 'off'
    }
};