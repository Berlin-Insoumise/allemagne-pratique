module.exports = {
  content: [
    "./layouts/**/*.{html,js}",        // pour les templates Hugo
    "./content/**/*.{md,html}",        // pour le contenu markdown
    "./assets/css/**/*.{css,scss}",    // pour le CSS avec @apply
    "./themes/hugoplate/**/*.{html,css}"
  ],
  theme: { extend: {
    spacing: {
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '36': '9rem',
      }
  } },
  plugins: [],
};