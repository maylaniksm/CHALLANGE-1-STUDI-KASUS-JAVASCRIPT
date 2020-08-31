//bisa diubah
let iniVariable = 1;
console.log(`awalnya ${iniVariable}`);
iniVariable = 2;
console.log(`jadinya ${iniVariable}`);

//tidak bisa diubah
const iniKonstanta = false;
console.log(`awalnya ${iniKonstanta}`);

/**
 * Contoh 1
 * Luas Lingkaran
 * phi x r x r
 */

const phi = 3.14;

let r1 = 10;
let result1 = phi * r1 * r1;
console.log(`Luas Lingkaran dengan Jari-Jari 10 ${result1}`);

let r2 = 20;
let result2 = phi * r2 * r2;
console.log(`Luas Lingkaran dengan Jari-Jari 20 ${result2}`);


/**
 * Function
 */

function LuasLingkaran(r) {
    const phi = 3.14;
    return phi * r * r;
}
console.log(`Luas Lingkaran dengan Jari-Jari 10: ${LuasLingkaran(10)}`);
console.log(`Luas Lingkaran dengan Jari-Jari 20: ${LuasLingkaran(20)}`);




/**
 * Arrow Function
 */

let hasil = (r) => {
    const phi = 3.14;
    return phi * r * r;
}

function NamaFungsi(parameter) {
    //body
}

(/*Parameter*/) => {
    //body
}

console.log(`Hasil Arrow Function ${hasil(20)}`);