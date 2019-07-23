const { GenerateSW } = require('workbox-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  webpack: function (config, env) {
    // Changing output filenames.
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
    config.output.filename = env === 'production' ? 'js/[name].[contenthash:8].bundle.js' : 'js/[name].bundle.js';
    config.output.chunkFilename = env === 'production' ? 'js/[name].[contenthash:8].bundle.js' : 'js/[name].bundle.js';
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks.cacheGroups = {
      default: false,
      vendor: {
        chunks: 'all',
        test: /node_modules/,
        name: 'common',
      },
    };
    config.module.rules[2].oneOf[7].options.name = 'images/[name].[hash:8].[ext]';
    const extractTextPlugin = config.plugins[5];
    extractTextPlugin.options = { ...extractTextPlugin.options, filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css' };

    if (env === 'production') {
      const workboxConfigProd = {
        clientsClaim: true,
        exclude: [/\.map$/, /asset-manifest\.json$/],
        importWorkboxFrom: 'local',
        navigateFallback: '/index.html',
        navigateFallbackBlacklist: [
          // Exclude URLs starting with /_, as they're likely an API call
          new RegExp('^/_'),
          // Exclude URLs containing a dot, as they're likely a resource in
          // public/ and not a SPA route
          new RegExp('/[^/]+\\.[^/]+$'),
        ],
        runtimeCaching: [{
          urlPattern: new RegExp('.(?:png|jpg|jpeg|svg|gif|css|js|pdf)'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'app-cache',
            // Configure custom cache expiration.
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 365 * 24 * 60 * 60,
            },
            // Configure background sync.
            backgroundSync: {
              name: 'app',
              options: {
                maxRetentionTime: 60 * 60,
              },
            },
            // Configure which responses are considered cacheable.
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: new RegExp('.(?:mp4)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'app-cache-video',
            // Configure custom cache expiration.
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 365 * 24 * 60 * 60,
            },
            // Configure which responses are considered cacheable.
            cacheableResponse: {
              statuses: [200],
            },
          }
        }],
      }

      config.plugins.push(new GenerateSW(workboxConfigProd),
      )
    }

    return config
  }
}

