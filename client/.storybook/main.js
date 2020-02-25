const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.filter(
      rule => !rule.test.test('.scss')
    )

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'style-resources-loader',
          options: {
            patterns: [path.resolve(__dirname, '../src/globals.scss')]
          }
        }
      ],
      include: path.resolve(__dirname, '../src')
    })

    // Return the altered config
    return config
  }
}
