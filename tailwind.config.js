module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          'Caveat': ['Caveat', 'sans-serif'],
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          blacck: '#141414',
          bblack: '#0D0D0D',
          bbutton: '#772AF4',
          bimage: '#414141',
          ctext: '#545454',
          textpimg: '#848484',

        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
    plugins: [],
};