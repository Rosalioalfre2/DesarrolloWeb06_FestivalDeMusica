//Solicitamos la dependencia
const { src , dest , watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    console.log('Compilando SASS....')

    //Pasos

        src('src/scss/app.scss') //1. Identificar el archivo .SCSS a compilar
            .pipe(sass()) //2. Compilarlo
            .pipe(dest('build/css')) //3. Almacenarlo


    console.log('\nSe compilo correctamente');

    done();
}

function watchSCSS(done){
    watch('src/scss/app.scss', css);
    console.log('Funcion watch scss');
    done();
}

exports.css = css;
exports.watchSCSS = watchSCSS;