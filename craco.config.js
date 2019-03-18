module.exports = {
  eslint: {
    enable: true,
    mode: 'file'
  },

  babel: {
    plugins: [
      ['babel-plugin-root-import', {
        'rootPathSuffix': 'src'
      }],
      'babel-plugin-styled-components'
    ]
  }
}