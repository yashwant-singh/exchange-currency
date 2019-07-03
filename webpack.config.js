const path = require('path');
const ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === 'dev';

module.exports = {
  context: __dirname,
  devServer: {
    historyApiFallback: true,
    port: '9000',
    proxy: {
      '/api/**': {
        target: 'http://localhost:9000',
      },
    },
    publicPath: '/public/',
  },
  entry: {
    app: ['babel-polyfill', 'semantic-ui-css/semantic.min.css', './js/App.jsx'],
  },
  
  output: { 
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'js'),
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        }
      },
      {
        test: /\.(ttf|eot)$/,
        use: {
          loader: 'file-loader',
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: './public',
          }
        }
      },
    ],
  },
  // output: {
  //   chunkFilename: devMode ? '[id].js' : '[id].[chunkhash].js',
  //   filename: devMode ? '[name].js' : '[name].[chunkhash].js',
  //   path: path.join(__dirname, '/public'),
  //   publicPath: '/public/',
  // },
  plugins: [
    new ManifestRevisionPlugin('manifest.json', {
      rootAssetPath: 'images',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
