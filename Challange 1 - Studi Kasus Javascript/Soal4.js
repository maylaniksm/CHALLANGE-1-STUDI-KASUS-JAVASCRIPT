deretgeometri = (a,r,n) => {
    for(let i = 2; i<=n; i++){
        a += (a*r)
    }
return a
}
console.log("Jumlah 10 suku pertama dari deret geometri tersebut adalah = " + deretgeometri(4,3,10))
