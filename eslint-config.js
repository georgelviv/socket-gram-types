module.exports = {
    env: {
      es6: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'google',
      'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['tsconfig.json', 'tsconfig.dev.json'],
      sourceType: 'module'
    },
    plugins: [
      '@typescript-eslint',
      'import'
    ],
    rules: {
      'quotes': ['error', 'single'],
      'import/no-unresolved': 0,
      'max-len': ['error', { 'code': 100 }],
      'object-curly-spacing': ['error', 'always'],
      'require-jsdoc': 'off',
      'camelcase': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'comma-dangle': ['error', 'never']
    }
  };
  