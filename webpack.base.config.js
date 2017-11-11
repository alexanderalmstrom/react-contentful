const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV

const baseConfig = {
	entry: {
		app: [
			'./src/index.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
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
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: false
		})
	]
}

if (env == 'development') {
	baseConfig.entry.app.unshift('react-hot-loader/patch')
}

module.exports = baseConfig