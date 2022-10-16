// ada 2 promo: 
// promo PIJARFOOD5, min pesan 50k dapat disc 50%, maks potongan 50k
// promo DITRAKTIRPIJAR, min pesan 25k dapat disc 60%, maks potongan 30k
// tidak menggunakan kode promo tidak dapat potongan (false)

// pengiriman 2km pertama ada tarif 5k, setiap 1km ada penambahan 3k
// beberapa resto ada pajak 5% dari harga item (true), jika tidak ada pajak (palse)

// contoh: 
// input: pijarFood(75000, "PIJARFOOD5", 5, true)
// output: Harga: 75000, potongan: 37500, biaya antar: 14000, pajak:3750, sub tot: 55250(harga-pot+biantr+pajk)

pijarFood = (harga, voucher, jarak, pajak) => {
    if (voucher == "PIJARFOOD5") {
        if (harga >= 50000){                                        // Validasi harga minimal 50.000 untuk PIJARFOOD5
            potHarga = 0.5 * harga;
            if (potHarga > 50000) {                              // Membatasi maksimal diskon jika melebihi dari 50.000
            potHarga = 50000
            }
        } else {                                                       // Jika tidak memenuhi minimal harga maka potongan harga 0
            potHarga = 0
        }
    } else if (voucher == "DITRAKTIRPIJAR") {
        if (harga >= 25000) {                                       // Validasi harga pesanan minimal 25.000 untuk DITRAKTIRPIJAR
            potHarga = 0.6 * harga
            if (potHarga > 30000) {                              // Membatasi maksimal diskon jika melebihi dari 30.000
            potHarga = 30000
            }
        } else {
            potHarga = 0                                          // Jika tidak memenuhi minimal harga maka potongan harga 0
        }
    } else {
        potHarga = 0
        }
    if (jarak > 2) {                                                 
        let jarakTambahan = jarak - 2                          // Kondisi dimana jarak tempuh lebih dari 2km. maka akan ada biaya tambahan 3000 setiap 1km
        biayaAntar = 5000 + (jarakTambahan * 3000)                   // penghitungan total biaya antar menjadi, biaya minimal antar + (selisihjarak x 3000)
    } else {
        biayaAntar = 5000                                                  // Kondisi dimana jika jarak tempuh tidak lebih dari 2km maka biaya antar = 5000
    }
    if (typeof(pajak) !== "boolean") {                                  // Validasi parameter pajakResto
        return "Data pajak resto harus bertipe boolean"
        }
    if (pajak == true) {                                               // kondisi dimana resto memakai pajak
        totPajakResto = 0.05 * harga
    } else {                                                               // kondisi jika resto tidak memakai pajak
        totPajakResto = 0
    }
    console.log( `Harga       : ${harga}
Potongan    : ${potHarga}
Biaya antar : ${biayaAntar}
Pajak       : ${totPajakResto}
Subtotal    : ${harga - potHarga + biayaAntar + totPajakResto}`) 
}
pijarFood(75000, "PIJARFOOD5", 5, true)
