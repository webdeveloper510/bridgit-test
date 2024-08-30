module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'filename-rules',
    'folders',
    'sort-imports-es6-autofix',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/quotes": ["error", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],
    'filename-rules/match': [2, /^([a-z0-9]+-)*[a-z0-9]+(?:\..*)?$/],
    'folders/match-regex': [2, '^[a-z0-9-]+$', '/src/'],
    "no-console": 2,
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }]
  },
};
