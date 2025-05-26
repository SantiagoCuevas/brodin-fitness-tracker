module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // React 18 specific rules
        'react/react-in-jsx-scope': 'off', // Not needed in React 18
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' },
        ],
        // Add your custom rules here
    },
    settings: {
        react: {
            version: '18.2', // Specify React 18 version
        },
    },
};