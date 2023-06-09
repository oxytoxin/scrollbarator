/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				spacegrotesk: 'Space Grotesk, sans-serif'
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
	]
};

module.exports = config;
