const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}))

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}