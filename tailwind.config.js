/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/preline/preline.js',
    './src/**/*.{html,ts}',  // Asegure-se de que os arquivos .html e .ts estejam sendo analisados
],
plugins: [
    require('preline/plugin'),
],
}

