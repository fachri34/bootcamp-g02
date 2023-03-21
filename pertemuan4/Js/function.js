//function: untuk menyimpan program

//Deklarasi
//di dalam parameter bisa diisi argument
//argument adalah variabel milik function

// function tes(nama, hobi){
//     console.log("halo semua")
//     console.log("Nama saya " + nama)
//     console.log("hobi saya " + hobi)
// }

// tes("Risa","nonton")


// function calc(satu, dua){
//     return satu + dua
// }

// console.log(calc(2,5))

//ekspresi
// let tes = function (){
//     return "hello world"
// }

// console.log(tes())

//Arrow
// let tes = (nama) =>{
//     return "halo  " + nama
// }

// console.log(tes())

// let tes = (nama) => "halo " + nama

// let tes = (nama) => (nama === "risa")? "Halo":(nama === 'Hasanah')? "hai":(alert("Masukan nama!"), "ini siapa")

// console.log(tes("Hasanah"))

let tes = (a) => {
    if(a <= 10){
        console.log(a+ ". Halo dunia" )
        return tes(a+1)
    }else{
        return "Halo dunia malam"
    }
}
tes(1)
