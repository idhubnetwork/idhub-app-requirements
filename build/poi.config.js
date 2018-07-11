const pkg = require('../package')

module.exports = {
  entry: 'src/index.js',
  moduleName: 'Doc',
  format: 'umd',
  filename: {
    js: 'doc.js',
    css: 'doc.css'
  },
  define: {
    __DOCUTE_VERSION__: JSON.stringify(pkg.version)
  }
}
