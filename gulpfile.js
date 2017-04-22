const gulp = require('gulp');
const gutil = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const header = require('gulp-header');
const sequence = require('run-sequence');

const cssnano = require('cssnano');

const fs = require('fs');
const path = require('path');

let getAnimations = () => {
  const animations = JSON.parse(fs.readFileSync('animations.json'));
  let animation, data, dest=['animations/index.css'], count = 0;

  for (animation in animations) {
    if (animations.hasOwnProperty(animation)) {
      data = animations[animation];

      for (var i = 0; i<data.length; ++i) {
        dest.push('animations/' + animation + '/' + data[i] + '.css');
        count += 1;
      }
    }
  }

  if (!count) {
    gutil.log('No animations found.');
  } else {
    gutil.log(count + (count > 1 ? ' animations' : ' animation') + ' found.');
  }

  return dest;
}

let getAnimation = getAnimations(); // Get all the animations

let gulpOptions = {
  destPath: path.join(__dirname, 'css'),
  concatName: 'animate-components.css',
  autoprefixer: {
    browsers: ['last 4 versions'],
    cascade: false
  },
  minRename: {
    suffix: '.min'
  }
};

gulp.task('default', ['generate_css'], () => {
  gutil.log("✅  Done compiling and minifying css.");
});

gulp.task('generate_css', () => {
  return gulp.src(getAnimation)
    .pipe(concat(gulpOptions.concatName))
    .pipe(autoprefixer(gulpOptions.autoprefixer))
    .pipe(gulp.dest(gulpOptions.destPath))
    .pipe(postcss([
      cssnano(
        {
          reduceIdents: {
            keyframes: false
          }
        })
    ]))
    .pipe(rename(gulpOptions.minRename))
    .pipe(gulp.dest(gulpOptions.destPath));
});
