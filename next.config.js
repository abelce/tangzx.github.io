const path = require('path')
module.exports = {
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
          const injectScssLoader = (rule) => {
            if (rule.test) {
              if (/\bscss\b/.test(rule.test + "")) {
                if (Array.isArray(rule.use)) {
                  rule.use.push({
                    loader: "sass-resources-loader",
                    options: {
                      resources:  path.resolve("./common/style/funcs.scss"),
                    },
                  });
                }
              }
            }
            if (rule.oneOf) {
              rule.oneOf.forEach(injectScssLoader);
            }
          };
          config.module.rules.forEach(injectScssLoader);

          // 路径别名引用方式
          config.resolve.alias['~'] = path.resolve(__dirname);
          config.resolve.alias['@'] = path.resolve(__dirname);

          //    config.plugins.push(
          new webpack.DefinePlugin({
            isDev: JSON.stringify(dev),
            isServer: JSON.stringify(isServer),
          })
      
          return config
    },
  }