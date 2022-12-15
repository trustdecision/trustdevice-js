module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  globals: {
    _fmOpt: true,
    ActiveXObject: true,
    safari: true,
    // jest global var
    test: true,
    expect: true
  },
  extends: ['airbnb-base'],
  // add your custom rules here
  rules: {
    'no-unused-expressions': [0],
    'no-bitwise': [0],
    'no-param-reassign': [0],
    'no-restricted-syntax': [0],
    'prefer-rest-params': [0],
    'no-empty': [0],
    'no-caller': [0],
    'no-restricted-properties': [0],
    'class-methods-use-this': [0],
    'no-underscore-dangle': [0],
    'no-plusplus': [0],
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: false
    }],
    'semi': ['error', 'never'],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}