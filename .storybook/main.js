const tsconfigPaths = require('vite-tsconfig-paths').default
// const { mergeConfig } = require('vite')
const path = require('path')
const svgrPlugin = require('vite-plugin-svgr')
// const { loadEnv } = require('vite')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  viteFinal: async (config, { configType }) => {
    // const env = loadEnv(config.mode, process.cwd())

    config.resolve.alias = [
      {
        find: '@',
        replacement: path.resolve(__dirname, '../src'),
      },
    ]
    config.plugins = [
      ...config.plugins,
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), '', 'tsconfig.json')],
      }),
    ]
    return config
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}
