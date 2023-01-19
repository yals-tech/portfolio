import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
const devServer: DevServerConfiguration = {
  static: path.join(__dirname, 'build'),
  compress: true,
  port: 4001
};

const IsProduction = process.env.production;

const config: Configuration = {
  entry: './src/index.tsx',
  mode: IsProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            cacheCompression: false,
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'dist/bundle.js'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer,
  optimization: {
    chunkIds: 'deterministic'
  },
  cache: {
    type: 'filesystem'
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false
      //   eslint: {
      //     files: "./src/**/*"
      //   }
    })
  ]
};

export default config;
