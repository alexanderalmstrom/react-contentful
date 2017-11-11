const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: {
		app: [
			'react-hot-loader/patch',
			'./src/app.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
		publicPath: '/build'
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
		new webpack.HotModuleReplacementPlugin()
	]
}