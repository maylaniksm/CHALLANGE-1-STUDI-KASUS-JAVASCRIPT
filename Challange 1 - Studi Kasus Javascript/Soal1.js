function tanah(p,l){
    let bayar = p * l * 1500000
    return bayar
}
function pajak(p,l){
    let luas = p * l * 1500000
    let ppn = luas * (15/100)
    return ppn
}
function count(p,l){
    let luas = p * l * 1500000
    let ppn = luas * (15/100)
    return luas + ppn
}
console.log("Panjang Tanah                  = 20.5 m")
console.log("Lebar Tanah                    = 30 m")
console.log("Harga tanah per m persegi      = Rp 1.500.000")
console.log("Total Harga Tanah              = Rp. " + tanah(20.5,30))
console.log("Pajak                          = Rp. " + pajak(20.5,30))
console.log("Total Harga Yang Harus Dibayar oleh Pak Arman = Rp. " + count(20.5,30))