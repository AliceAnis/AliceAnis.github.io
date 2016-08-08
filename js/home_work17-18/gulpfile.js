var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var dest = require('gulp-dest');
var sourceMaps = require('gulp-sourcemaps');
var autoPrefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var server = require('gulp-server-livereload');
var cache = require('gulp-cache');

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'))
});

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                    cb( !(/.DS_Store/.test(filePath)) );
                }
            },
            directoryListing: false,
            open: true,
            log: 'info',
            defaultFile: 'index.html'
        }));
});

gulp.task('sass', function () {
    return sass('src/components/main.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', function() {
    gulp.start('scripts', 'sass', 'pages', 'images', 'webserver');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/components/**/*.scss', ['sass']);
});