// Dependencies

const babelify = require('babelify');
const browserify = require('browserify');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const fs = require('fs');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// Variables

const rootPaths = {
  res: 'resources/',
  pub: 'public/'
}

const basePaths = {
  src: rootPaths.res + 'assets/',
  dev: rootPaths.pub + 'assets/',
  prod: rootPaths.pub + 'assets/prod/'
};

const paths = {
  src: {
    // files
    files: {
      sass: basePaths.src + 'sass/**/*.scss',
      css: basePaths.src + 'css/**/*.css',
      js: {
        root: basePaths.src + 'js/*.js',
        plugin: basePaths.src + 'js/plugin/*.js',
        component: basePaths.src + 'js/component/**/*.js',
        constants: basePaths.src + 'js/constants/**/*.js',
        redux: basePaths.src + 'js/redux/**/*.js',
        container: basePaths.src + 'js/container/**/*.js',
        store: basePaths.src + 'js/store/**/*.js',
      },
      img: basePaths.src + 'img/**/*.+(png|jpg|gif|svg)',
      font: basePaths.src + 'fonts/**/*',
    },
    // directories
    dirs: {
      sass: basePaths.src + 'sass/',
      css: basePaths.src + 'css/',
      js: {
        root: basePaths.src + 'js/',
        plugin: basePaths.src + 'js/plugin/',
        component: basePaths.src + 'js/component/',
        constants: basePaths.src + 'js/constants/',
        redux: basePaths.src + 'js/redux/',
        container: basePaths.src + 'js/container/',
        store: basePaths.src + 'js/store/',
      },
      img: basePaths.src + 'img/',
      font: basePaths.src + 'fonts/',
    },
  },
  dev: {
    // files
    files: {
      css: basePaths.dev + 'css/**/*.css',
      js: basePaths.dev + 'js/*.js',
      img: basePaths.dev + 'img/**/*.+(png|jpg|gif|svg)',
      font: basePaths.dev + 'fonts/**/*',
    },
    // directories
    dirs: {
      css: basePaths.dev + 'css/',
      js: basePaths.dev + 'js/',
      img: basePaths.dev + 'img/',
      font: basePaths.dev + 'fonts/',
    },
  },
  prod: {
    // production assets
    css: basePaths.prod + 'css/',
    js: basePaths.prod + 'js/',
    img: basePaths.prod + 'img/',
    font: basePaths.prod + 'fonts/',
  }
};

// Concat React components

gulp.task('reactIndex', function() {
  return browserify(paths.src.dirs.js.store + "index.js")
    .transform(babelify, {presets: ["react", "es2015", "stage-2"]})
    .bundle()
    .pipe(fs.createWriteStream(paths.dev.dirs.js + "app.js"));
});

// Concat plugins

gulp.task('concatPlugins', function() {
  return gulp.src(paths.src.files.js.plugin)
    .pipe(concat('plugin.js'))
    .pipe(gulp.dest(paths.dev.dirs.js));
});

// Precompile and Watch

gulp.task('sass', function(){
  return gulp.src(paths.src.files.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dev.dirs.css))
});

gulp.task('watch', ['sass', 'reactIndex'], function (){
  gulp.watch(paths.src.files.sass, ['sass']);
  gulp.watch(paths.src.files.js.component, ['reactIndex']);
  gulp.watch(paths.src.files.js.container, ['reactIndex']);
  gulp.watch(paths.src.files.js.constants, ['reactIndex']);
  gulp.watch(paths.src.files.js.redux, ['reactIndex']);
  gulp.watch(paths.src.files.js.store, ['reactIndex']);
  // Other watchers
});

// Copy Images and Fonts

gulp.task('copyImages', function(){
  return gulp.src(paths.src.files.img)
  .pipe(gulp.dest(paths.dev.dirs.img))
});

gulp.task('copyFontsDev', function() {
  return gulp.src(paths.src.files.font)
  .pipe(gulp.dest(paths.dev.dirs.font))
});

// Minify Javascript and Stylesheets

gulp.task('minifyStyles', function() {
  return gulp.src(paths.dev.files.css)
    .pipe(concat('main.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.prod.css));
});

gulp.task('minifyScripts', function() {
  return gulp.src(paths.dev.files.js)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.prod.js));
});

// Minify Images and Fonts

gulp.task('minifyImages', function(){
  return gulp.src(paths.dev.files.img)
  .pipe(imagemin({
    verbose: true
  }))
  .pipe(gulp.dest(paths.prod.img))
});

gulp.task('copyFontsProd', function() {
  return gulp.src(paths.dev.files.font)
  .pipe(gulp.dest(paths.prod.font))
});

// Clear Image Cache
gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
});

// Build Dist and Run Development

gulp.task('build', function(callback) {
  runSequence('sass', 'reactIndex',
    ['minifyStyles', 'minifyScripts', 'minifyImages', 
    'copyFontsProd'],
    callback
  );
});

gulp.task('default', function (callback) {
  runSequence('copyFontsDev', 'copyImages', ['sass', 'reactIndex', 'concatPlugins', 'watch'],
    callback
  );
});