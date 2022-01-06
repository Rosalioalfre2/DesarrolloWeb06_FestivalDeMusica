//Solicitamos la dependencia
const { src , dest , watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const avif = require('gulp-avif');

function css(done){

    //Pasos

        src('src/scss/**/*.scss') //1. Identificar el archivo .SCSS a compilar
            .pipe( plumber() )
            .pipe(sass()) //2. Compilarlo
            .pipe(dest('build/css')) //3. Almacenarlo



    done();
}

function watchScss( done ) {
    watch('src/scss/**/*.scss', css);
    done();
}

function versionWebp( done ){
    
    const opciones = {
        quality: 50,
    };

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe( webp(opciones) )
        .pipe(dest('build/img'));

    done()
}

function rebajarImagenes( done ){

    const opciones = {
        optimizationLevel: 3,
    }

    src('src/img/**/*.{png,jpg,jpeg}')
    .pipe( cache( imagemin(opciones) ) )
    .pipe( dest('build/img'));


    done();
}

function versionAvif( done ){
    
    const opciones = {
        quality: 50,
    };

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe( avif(opciones) )
        .pipe(dest('build/img'));

    done()
}

exports.css = css;
exports.webp = versionWebp;
exports.avif = versionAvif;
exports.watchScss = watchScss;
exports.rebajarImagenes = rebajarImagenes;
exports.dev = parallel(css, versionWebp, rebajarImagenes, versionAvif, watchScss);