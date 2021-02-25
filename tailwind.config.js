module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            serif: ['Heebo', 'serif']
        },
        extend: {
            colors: {
                yellow: {
                    primary: '#FFB946'
                },
                red: {
                    primary: '#FF5A5A'
                },
            },
            fontSize: {
                // [fontSize, lineHeight]
                h1: ['2.5rem', '200%'],
                h2: ['2.25rem', '200%'],
                h3: ['2rem', '175%'],
                h4: ['1.5rem', '175%'],
                h5: ['1.125rem', '175%'],
                paragraph: ['1rem', '150%'],
            },
            width: {
                'cart-sidebar': '550px'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ],
}
