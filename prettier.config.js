module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  plugins: [],
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html'
      }
    }
  ],
  proseWrap: 'preserve', // printWidth line breaks in md/mdx
  printWidth: 9999
}
