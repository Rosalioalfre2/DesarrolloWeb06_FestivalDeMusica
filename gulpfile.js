//Solicitamos la dependencia
const { src , dest , watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

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

function dev( done ) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;