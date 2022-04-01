module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {}
    },
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
    'import/prefer-default-export': 0,
    'import/extensions': [2, { '.tsx': 'never', '.ts': 'never', '.js': 'never' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'arrow-body-style': 0,
    '@typescript-eslint/explicit-function-return-type': 'error',
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error']
      }
    },
    {
      // enable eslint-plugin-testing-library rules or preset only for matching files!
      'files': ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      'extends': ['plugin:jest/recommended', 'plugin:testing-library/react']
    },
    {
      'files': ['**/*.ts?(x)'],
      'parser': '@typescript-eslint/parser',
      'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
      ]
    }
  ],
  globals: {
    JSX: 'readonly'
  }
}
