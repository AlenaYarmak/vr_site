const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');

function scripts() {
    return src([
        'node_modules/swiper/swiper-bundle.js',
        'app/js/main.js',

        /* 'app/js/*.js',
        '!app/js/main.min.js' */])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function fonts() {
    return src('app/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

async function styles() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;

    return src('app/scss/style.scss')
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 3 versions']}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function watching() {
    watch(['app/scss/style.scss'], styles)
    watch(['app/js/main.js'], scripts)
    watch(['app/fonts/**/*'], fonts)
    watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function cleanDist() {
    return src('dist')
        .pipe(clean())
}

function building() {
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/fonts/**/*',
        'app/img/**/*',
        'app/**/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.build = series(cleanDist, parallel(styles, scripts, fonts), building);

exports.default = parallel(styles, scripts, browsersync, watching);