class lingkaran{
    constructor (r){
        this.jarijari = r
    }
luas(){
        return 3.14 * this.jarijari **2
    }
keliling() {
        return 3.14 * this.jarijari *2
    }
}

class bola extends lingkaran{
    volume(){
        return 4/3 * this.jarijari * super.luas()
    }
luasPermukaan() {
        return 4 * super.luas()
    }
}

class kerucut extends lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
volume() {
        return 1/3 * super.luas() * this.tinggi
    }
luasSelimut() {
        let s = Math.sqrt(this.jarijari **2 + this.tinggi **2)
        return 3.14 * this.jarijari * s
    }
luasPermukaan () {
        return super.luas() * this.luasSelimut()
    }
}

class tabung extends lingkaran{
    constructor (r,t){
        super (r)
    this.tinggi = t
    }
volume () {
        return super.luas() * this.tinggi
    }
    luasSelimut () {
        return super.keliling() * this.tinggi
    }
    luasPermukaan() {
        return  super.luas() + this.luasSelimut()
    }
}

console.log("       *************** B O L A ***************         ")
let bal = new bola(15)
console.log("VOLUME BOLA                      : " + bal.volume())
console.log("LUAS PERMUKAAN BOLA              : " + bal.luasPermukaan())

console.log("       *************** C O N E ***************         ")
let cone = new kerucut(10,40)
console.log("VOLUME CONE                      : " + cone.volume())
console.log("LUAS SELIMUT CONE                : " + cone.luasSelimut())
console.log("LUAS PERMUKAAN CONE              : " + cone.luasPermukaan())

console.log("       *************** G E L A S ***************         ")
let gelas = new tabung(7.5,50)
console.log("VOLUME GELAS                     : " + gelas.volume())
console.log("LUAS SELIMUT GELAS               : " + gelas.luasSelimut())
console.log("LUAS PERMUKAAN GELAS             : " + gelas.luasPermukaan())