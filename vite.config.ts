import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		VitePWA()
	],
	base: "/Sprout/",
	build: {
		target: 'esnext'
	},

})