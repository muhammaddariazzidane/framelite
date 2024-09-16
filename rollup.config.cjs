import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.scss',
  output: {
    file: 'dist/main.min.css',
    format: 'es',
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      plugins: [require('autoprefixer'), require('cssnano')],
    }),
  ],
};
