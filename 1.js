function lelangArr(num) {
    var nilaiAwalBaju = 10000
    var nilaiAwalCelana = 20000
    var nilaiAwalKacamata = 30000
    for( i = 1; i <= num; i++ ) {
        hargaBaju = Math.ceil(nilaiAwalBaju + nilaiAwalBaju * 0.1) 
        hargaCelana = Math.ceil(nilaiAwalCelana + nilaiAwalCelana * 0.2)
        hargaKacamata = Math.ceil(nilaiAwalKacamata + nilaiAwalKacamata * 0.3)
    }
    return `Di menit ke ${num} Product info
    Nama barang = Baju, harga = ${hargaBaju}
    Nama barang = Celana, harga = ${hargaCelana}
    Nama barang = Kacamata, harga = ${hargaKacamata}`
}
console.log(lelangArr(1))