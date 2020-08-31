let barang = [
    {nama: 'Beras', harga: 10000, jumlah: 5},
    {nama: 'Gula', harga: 14000, jumlah: 5},
    {nama: 'Telur', harga: 20000, jumlah: 2},
    {nama: 'Minyak Goreng', harga: 9000, jumlah: 10}
]
let jumlah = 0

barang.map(
    (bar,index) => {
        jumlah += (bar.harga*bar.jumlah)
    }
)
console.log("Beras         : 10000 x 5  = 50000")
console.log("Gula          : 14000 x 5  = 70000")
console.log("Telur         : 20000 x 2  = 40000")
console.log("Minyak Goreng : 9000  x 10 = 90000")
console.log("Total Belanjaan Yang Harus Dibayar Bu Astuti = Rp." + jumlah)