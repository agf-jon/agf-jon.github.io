var siteUrl = __dirname.split('/web/')[0].split('/').pop() + '.pantheon.test';

var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var sourcemaps      = require('gulp-sourcemaps');
var dateTime        = require('node-datetime');

// pass in siteUrl to create a unique instance for multiple instances.
var browsersync     = require('browser-sync').create(siteUrl);


// ================================================================================================
// Config
// ================================================================================================

var config = {
  // config obj for SASS compilation
  sass: {
    outputStyle: 'compressed',
  },
  // custom function for SASS errors (used in task 'sass')
  sassError: function(error) {
    sass.logError.bind(this)(error);
    browsersync.notify(
      '<pre style="max-width: 50%; text-align: left; margin: 0; font-family: Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, Monaco, Courier New, Courier, monospace;">' + '<strong style="color: red;">SASS ERROR</strong><br>' +
      error.formatted + '</pre>', 5000);
  },
  // browser sync config obj
  browsersync: {
    logPrefix: siteUrl,
    open: false,
    proxy: siteUrl,
    host: siteUrl,
    port: 4000,
    notify: {
      // override some of the default styling
      styles: {
        fontFamily: 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", Monaco, "Courier New", Courier, monospace',
        top: 'auto',
        bottom: '0',
        borderBottomLeftRadius: '0',
        borderTopLeftRadius: '5px'
      }
    }
  },
  // autoprefixer config
  autoprefixer: [
    'last 2 version'
  ]
};


// ================================================================================================
// Tasks
// ================================================================================================

// compile sass and return stream
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass).on('error', config.sassError))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(browsersync.stream({match: '**/*.css'})); // this line injects style.css
});

// sass watch task
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});


// ================================================================================================
// Default Task
// ================================================================================================

gulp.task('default', function () {

  // set up browsersync server
  browsersync.init(config.browsersync);

  // watch for changes on these files
  gulp.watch('scss/**/*.scss', ['sass']);

  // reload on twig changes
  gulp.watch(['templates/**/*.twig', 'templates/**/*.tpl.php'], function () {
    browsersync.notify('<span style="color: red;">Template changes detected</span>, browser refreshing...');
    browsersync.reload();
  });

  browsersync.watch('scss/**/*.scss', function (event, file) {
    if (event === 'change') {
      console.log('\n[' + event + '] ' + file + '\n');
      gulp.start('sass');
    }
  });
  
  // reload on file changes for BS watch list set in config.
  browsersync.watch(
    config.browsersync.watch, function (event, file) {
      console.log('\n[' + event + '] ' + file + '\n');
      if (event === 'change') {
        browsersync.notify('<span style="color: red;">' + file + ' ' + event +'</span>, browser refreshing...');
        browsersync.reload();
      }
  });
});
