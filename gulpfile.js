//Solicitamos la dependencia
const { src , dest , watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');

function print(mensaje){
    console.log(mensaje);
}

function css(done){
    console.log('Compilando SASS....')

    //Pasos

        src('src/scss/**/*.scss') //1. Identificar el archivo .SCSS a compilar
            .pipe( plumber() )
            .pipe(sass()) //2. Compilarlo
            .pipe(dest('build/css')) //3. Almacenarlo


    console.log('\nSe compilo correctamente');

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

    print("Se conviertieron las imagenes con exito");
    done()
}

exports.css = css;
exports.webp = versionWebp;
exports.watchScss = watchScss;
exports.dev = parallel(css, versionWebp, watchScss);