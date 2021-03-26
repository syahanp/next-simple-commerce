module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false,
    theme: {
        fontFamily: {
            serif: ['Heebo', 'serif']
        },
        extend: {
            colors: {
                yellow: {
                    500: '#FFB946',
                    400: '#FFC76B',
                    300: '#FFD590',
                    200: '#FFE3B5',
                    100: '#FFF1DA',
                    primary: '#FFB946'
                },
                red: {
                    500: '#FF5A5A',
                    400: '#FF7B7B',
                    300: '#FF9C9C',
                    200: '#FFBDBD',
                    100: '#FFDEDE',
                    primary: '#FF5A5A'
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ],
}
