module.exports = {
  content: [
    "./layouts/**/*.{html,js}",        // pour les templates Hugo
    "./content/**/*.{md,html}",        // pour le contenu markdown
    "./assets/css/**/*.{css,scss}",    // pour le CSS avec @apply
    "./themes/hugoplate/**/*.{html,css}"
  ],
  theme: { extend: {} },
  plugins: [],
};