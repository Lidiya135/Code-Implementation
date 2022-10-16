// 1. Deteksi Palindom
function cekPalindrom(text,cb) {
    let data = text.toLowerCase().split("").reverse().join("")
    return (cb(text,data))
}
const hasil = (text1,text2) => {
    let text1LowerCase = text1.toLowerCase()
    if (text1LowerCase == text2) {
        console.log(`${text1} adalah palindrom`)
    } else {
        console.log(`${text1} bukan palindrom`)
    }
}
let kata = "Malam"
cekPalindrom(kata, hasil)

// 2. Reverse Words
let kalimat = "Saya belajar Javascript"
const reverseWords = (text) => {
    let dataReverse = text.split(" ").reverse().join(" ") 
    console.log (dataReverse)
 }
reverseWords(kalimat)