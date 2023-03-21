//Object
//variabel yang bisa menampung banyak variabel

//object literral
// let data = {
//     nama: "risa",
//     hobi: "nonton",
//     alamat:{
//         jalan: "jln. maju",
//         RT : 1,
//         RW : 6
//     },
//     makanan: ["bakso", "mie", "telor"],
//     greet : function(){
//         console.log("Halo " + this.nama)
//     }
// }

// data.minuman = ["teh","kopi","jus"]
// data.nama = 'risa nussy'
// data.alamat.jalan = 'jln. maju mundur'
// console.log(data.alamat.jalan)
// console.log(data)
// console.log(data.greet())
// console.log(data.makanan[0])
// console.log(data.minuman[0])

//function deklarative
// let data = function (nama, hobi){
//     let obj = {}
//     obj.nama = nama
//     obj.hobi = hobi
//     return obj
// }

// let risa = data("risa", "nonton")
// console.log(risa.nama)
// console.log(data)


//function destructuring
let Data = function(nama,hobi){
    //let this = {}
    this.name = nama
    this.hobi = hobi
    //return this
}

Data.prototype.greet = function(){
    return "Halo saya" + " " +  this.name + " " + "Hobi saya " + this.hobi
}

let pemain1 = new Data("risa nussy", "nonton")
console.log(pemain1.greet())
console.log(pemain1)