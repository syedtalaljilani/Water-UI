/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'medium-purple': {
					'50': '#f6f5fd',
					'100': '#efecfb',
					'200': '#e0dbf9',
					'300': '#c9bef4',
					'400': '#ae99ec',
					'500': '#9a79e4',
					'600': '#8251d6',
					'700': '#723fc2',
					'800': '#5f34a3',
					'900': '#4f2c86',
					'950': '#311b5a',
				},
				'cerulean': {
					'50': '#ecfdff',
					'100': '#d0f6fd',
					'200': '#a7ebfa',
					'300': '#6adbf6',
					'400': '#27c2e9',
					'500': '#0a9ac2',
					'600': '#0c83ae',
					'700': '#11698d',
					'800': '#175673',
					'900': '#184861',
					'950': '#092e43',
				},
				
			}
		},
	},
	plugins: [],
}
