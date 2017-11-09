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
		filename: '[name].js',
		publicPath: '/'
	},
	devServer: {
		hot: true,
		port: 3000,
		historyApiFallback: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					presets: [['es2015', { 'modules': false }], 'stage-1', 'react'],
					plugins: [
						'react-hot-loader/babel'
					]
				}
			}
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}