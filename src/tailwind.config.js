module.exports = {
    theme: {
        extend: {
            perspective: {
                '1000': '1000px',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.perspective-1000': {
                    perspective: '1000px',
                },
                '.transform-style-3d': {
                    'transform-style': 'preserve-3d',
                },
                '.rotate-y-180': {
                    transform: 'rotateY(180deg)',
                },
                '.backface-hidden': {
                    'backface-visibility': 'hidden',
                },
            });
        },
    ],
};