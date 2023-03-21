//array
//sebuah variabel yang bisa memanampung lebih dari satu value
//simbol array[]

// let data = ["risa nussy", "nonton", 13.4, true, 'b', "apa ini", false,900,"ok"]

// for(let i = 0; i< data.length;i++){
//     console.log(data[i])
// }

// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])

// data[0] = 'isa'

// console.log(data[0])

let tes = ['bakso', 'telor', 'ayam', ['jus', 'es', 'kopi'], 'bayem']
for(let i = 0;i< tes.length; i++){
   if(i === 3){
    for(let j =0; j < tes[3].length; j++){
     console.log(tes[3][j])
    }
   }else{
   console.log(tes[i])
   }
    
}