//Requierds
const fs = require('fs'); // Nativa
const colors= require ('colors');
//const fs = require('express');
//const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('================='.green);
    return new Promise( (resolve,reject) => {



        if (!Number(base)){
            reject (`El Valor como Base ${base} NO es un número`);
            return;
        }

        let data ='';

        for (let i=1; i<= limite; i++){
            data += `${base} * ${i} = ${base*i} \r\n`;
        }
        resolve (data);
    });
}

let crearArchivo = ( base, limite = 10 ) =>{
    return new Promise( (resolve,reject) => {

        if (!Number(base)){
            reject (`El Valor como Base ${base} NO es un número`);
            return;
        }
        if (!Number(limite)){
            reject (`El Valor como Limite ${limite} NO es un número`);
            return;
        }

        let data ='';

        for (let i=1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i} \r\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject (err)
            else
                resolve (`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}