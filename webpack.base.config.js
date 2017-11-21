const path = require('path')
const webpack = require('webpack')
const DotenvPlugin = require('dotenv-webpack')

const baseConfig = {
	entry: {
		app: [
			'./src/index.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'public'),
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new DotenvPlugin()
	],
}

if (process.env.NODE_ENV == 'development') {
	baseConfig.entry.app.unshift('react-hot-loader/patch')
}

module.exports = baseConfig
