module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'jv-admin',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project'
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},

	cache: {
		max: 1000,
		maxAge: 900000
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#3B8070'
	},

	css: [
		'~/css/bootstrap.css',
		'~/css/main.css',
		'~/css/icon.css',
		'~/css/global.css'
	],

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLint on save
		 */
		extend(config, {
			isDev,
			isClient
		}) {
			if(isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}