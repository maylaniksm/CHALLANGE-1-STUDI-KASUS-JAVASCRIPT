function bmi(berat, tinggi){
    let total = berat / Math.pow(tinggi, 2)
        if (total < 18.5)
        return ("ANDA KEKURANGAN BERAT BADAN = " + total)
        if (total >= 18.5 && total <= 24.9)
        return ("BERAT BADAN ANDA IDEAL = " + total)
        if (total >= 25 && total <= 29)
        return ("ANDA KELEBIHAN BERAT BADAN = " + total)
        if (total >= 30)
        return ("ANDA KEGEMUKAN BERAT BADAN = " + total)
}
console.log("Tinggi Badan = 170 cm")
console.log("Berat Badan  = 90  kg")
console.log(bmi(90, 1.7))