const gulp = require('gulp');
const concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var uglifycss = require('gulp-uglifycss');
const dest = require('gulp-dest');
// var sourceMaps = require('gulp-sourcemaps');
// var autoPrefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// var rename = require('gulp-rename');
const server = require('gulp-server-livereload');
// var cache = require('gulp-cache');
const babel = require('gulp-babel');

gulp.task('scripts', () => {
    return gulp.src('src/js/*.js')
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('pages', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

// gulp.task('images', function() {
//     return gulp.src('src/img/**/*.*')
//     .pipe(gulp.dest('dist/img'))
// });

gulp.task('babel', () => {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    return gulp.src('src/css/*.css')
        // .pipe(concat('app.js', {newLine: ';'}))
        .pipe(gulp.dest('dist/css'));
});

// gulp.task('webserver', function() {
//     gulp.src('dist')
//         .pipe(server({
//             livereload: true,
//             directoryListing: false,
//             open: true,
//             log: 'info',
//             defaultFile: 'index.html'
//         }));
// });

gulp.task('webserver', () => {
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

gulp.task('default', () => {
    gulp.start('scripts', 'pages', 'webserver', 'babel', 'css');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/**/*.css', ['css']); 
});