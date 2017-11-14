const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv-webpack')

const baseConfig = {
	entry: {
		app: [
			'./src/index.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						plugins: [
							'react-hot-loader/babel'
						]
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.json', '.scss'],
		modules: [
			path.resolve(__dirname, 'node_modules')
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new dotenv()
	],
}

if (process.env.NODE_ENV == 'development') {
	baseConfig.entry.app.unshift('react-hot-loader/patch')
}

module.exports = baseConfig