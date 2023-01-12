/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				//text
				VeryDarkBlue: "hsl(238, 29%, 16%)",
				SoftRed: "hsl(14, 88%, 65%)",
				VeryDarkGrayishBlue: "hsl(237, 12%, 33%)",
				DarkGrayishBlue: "hsl(240, 6%, 50%)",
				//Gradient
				SoftViolet: "hsl(273, 75%, 66%)",
				SoftBlue: "hsl(240, 73%, 65%)",
				//Dividers
				LightGrayishBlue: "hsl(240, 5%, 91%)",
			},
			fontFamily: {
				KumbhSans: ["Kumbh Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
