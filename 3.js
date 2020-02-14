function cekKoin(num) {
    var coint = [25,10,5,1]
    var count = 0
    while( num > 0 ) {
        if( num >= coint[0] ) {
            num -= coint[0]
            count++
        } else if( num >= coint[1] ) {
            num -= coint[1]
            count++
        } else if( num >= coint[2] ) {
            num -= coint[2]
            count++
        } else if( num >= coint[3] ) {
            num -= coint[3]
            count++
        }
    }
    return count
}

console.log(cekKoin(49))
console.log(cekKoin(31))
console.log(cekKoin(50))
console.log(cekKoin(10))
console.log(cekKoin(7))
console.log(cekKoin(3))
console.log(cekKoin(150))
console.log(cekKoin(25))