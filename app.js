

const argv = require ('./config/yargs').argv;
const colors= require ('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando =argv._[0];

switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then( latabla => console.log(latabla))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then (archivo => console.log(`Archivo Creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando No Reconocido');
}

//console.log(argv);

//let argv2 = process.argv;
//console.log(argv.base);
//console.log('Limite', argv.limite);

/*
let parametro = argv[2];
let base=parametro.split('=')[1];
*/

//console.log(base);


/**/
