/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	// content: ["./index.html", "./src/*/.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			textColor: {
				info: "#303133",
				"info-4": "rgba(0, 0, 0, 0.45)",
				"info-8": "rgba(0, 0, 0, 0.8)",
				"info-88": "rgba(0, 0, 0, 0.88)",
				"w-80": "rgba(255, 255, 255, 0.8)",
				"w-60": "rgba(255, 255, 255, 0.8)",
				label: "rgba(132, 133, 135, 1)"
			},
			width: {
				"25r": "25rem",
				"46/100": "46%",
				"8/10": "80%"
			},
			height: {
				"25r": "25rem"
			}
		}
	},
	plugins: [
		function ({ addBase }) {
			addBase({
				".el-button": {
					"background-color": "var(--el-button-bg-color,var(--el-color-white))"
				}
			});
		}
	]
};
