// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const path = require('path')
const WorkboxPlugin= require('workbox-webpack-plugin')

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: '/',
		src: '/'
	},
	devOptions: {
		port: 3000,
		open: 'none',
	},
	plugins: [
		[
			'@snowpack/plugin-webpack',
			{
				sourceMap: false,
				htmlMinifierOptions: {
					collapseWhitespace: true,
					removeComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
				},
				extendConfig: (config) => {
					config.output = {
						filename: '[id].vibrant.js',
						path: path.resolve(__dirname, 'build/'),
					}
					config.plugins.push(
						new WorkboxPlugin.GenerateSW({
							clientsClaim: true,
							skipWaiting: true,
						  }),
					)
					return config
				}
			},
		],
	],	
};