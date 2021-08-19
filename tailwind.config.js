module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // Or 'Media' Or 'Class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
