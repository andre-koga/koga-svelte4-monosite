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
				jet: ['JetBrains Mono', 'sans-serif'],
				display: ['Bricolage Grotesque', 'sans-serif'],
				text: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
