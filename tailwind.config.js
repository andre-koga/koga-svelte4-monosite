/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['selector', '[data-theme="dark"]'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundBlendMode: ['difference'],
			colors: {
				darkbg: '#020712',
				lightbg: '#FAFAF9',
				darktext: '#DEE5ED',
				lighttext: '#000000'
			},
			fontFamily: {
				jet: ['IBM Plex Sans', 'sans-serif'],
				display: ['IBM Plex Sans', 'sans-serif'],
				text: ['IBM Plex Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
