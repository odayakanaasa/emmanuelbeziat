module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'env': {
    'es6': true,
    'browser': true
  },
  // add your custom rules here
  'rules': {
    // 'indent': ['error', 'tab'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // No semilocons
    'semi': ['error', 'never' ],
    // Single quotes
    'quotes': ['error', 'single']
  }
}
