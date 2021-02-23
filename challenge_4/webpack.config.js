module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: '**/node_modules'
  },
};

// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   plugins: [
//     new HtmlWebpackPlugin()
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.(js|jsx)$/,
//         include: SRC_DIR,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-react', '@babel/preset-env']
//         }
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   }
// };



// const path = require('path');

// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       }
//     ]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/client/dist'
//   }
// };