import { VitePWA } from 'vite-plugin-pwa'

export default {
	plugins: [
		VitePWA()
	],
	base: "/Sprout/",
	build: {
		target: 'esnext'
	}
}