module.exports = {
  SRC: 'src',
  DIST: 'docs',
  STYLES: [
    './node_modules/reset.css/reset.css',
    './node_modules/normalize.css/normalize.css',
    './src/+(sass|scss)/*.+(scss|sass)',
    './node_modules/owl.carousel/dist/assets/owl.carousel.css'
  ],
  JS: ['./node_modules/jquery/dist/jquery.js', 
  './node_modules/jquery-touchswipe/jquery.touchSwipe.js',
  './node_modules/mobile-detect/mobile-detect.js',
  './node_modules/owl.carousel/dist/owl.carousel.min.js',
  './src/scripts/*.js',
  ],
}