const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.[chunkhash].js',
		path: path.resolve(__dirname, 'public'),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 4200,
	},
	plugins: [
		new HTMLPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};