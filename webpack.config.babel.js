import process from 'process';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DashboardPlugin from 'webpack-dashboard/plugin';

// loaders =====================================================================

let babelLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel'
};

let scssLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  loaders: [
    'style?insertAt=top',
    'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:4]',
    'sass'
  ]
};

let jsonLoader = {
  test: /\.json$/,
  loader: 'json'
};

let imageLoader = {
  test: /\.png$/,
  loader: 'file-loader'
};

// plugins =====================================================================

let templatePlugin = new HtmlWebpackPlugin({
  template: path.resolve('src', 'index.html'),
  inject: 'body',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
});

let occurrenceOrderPlugin = new webpack.optimize.OccurrenceOrderPlugin();
let dedupePlugin = new webpack.optimize.DedupePlugin();

let setProdEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

/* eslint-disable camelcase */

let uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    screw_ie8: true,
    warnings: false
  },
  minimize: true,
  mangle: {
    screw_ie8: true
  },
  output: {
    comments: false,
    screw_ie8: true
  }
});

/* eslint-enable camelcase */

let vendorsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js');
let dashboardPlugin = new DashboardPlugin();
let hotReloaderPlugin = new webpack.HotModuleReplacementPlugin();

// config ======================================================================

let config = {
  entry: {
    vendors: [],
    app: path.resolve('src', 'app.jsx')
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      theme: path.resolve('src', 'theme')
    }
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    setProdEnvPlugin, // used mostly by third-party libs
    templatePlugin,
    occurrenceOrderPlugin,
    vendorsPlugin,
    dedupePlugin,
    uglifyJsPlugin
  ],
  module: {
    loaders: [
      babelLoader,
      scssLoader,
      jsonLoader,
      imageLoader
    ]
  }
};

const {
  NODE_ENV,
  PORT
} = process.env; // eslint-disable-line no-process-env

if (NODE_ENV === 'development') {
  config.devtool = 'eval';
  config.entry.hot = [
    `webpack-dev-server/client?http://0.0.0.0:${PORT}`, // WebpackDevServer host and port
    'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
  ];
  config.plugins = [
    templatePlugin,
    occurrenceOrderPlugin,
    vendorsPlugin,
    dashboardPlugin,
    hotReloaderPlugin
  ];
}

export default config;
