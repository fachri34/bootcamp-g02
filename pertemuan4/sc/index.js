function calc() {
    let a = parseInt(prompt("Masukan angka pertama"))
    let b = parseInt(prompt("Masukan angka kedua"))
    let c = prompt("Masukan Pengoprasian: \n1.+(tambah)\n2.-(kurang)\n3.*(kali)\n4./(bagi)\n5.%(modulus)")
    
        if(c == "*"){
            hasil = a*b
             alert("hasilnya adalah" + " " + hasil)  
             let lanjut = prompt("apakah mau dilanjutkan ? y/n")
             if(lanjut == 'y'){
                return calc()
             }else{
                return alert("terima kasih")
             }
        }else if(c == "/"){
            hasil = a/b
            alert("hasilnya adalah" + " " + hasil) 
            let lanjut = prompt("apakah mau dilanjutkan ? y/n")
            if(lanjut == 'y'){
               return calc()
            }else{
               return alert("terima kasih")
            }
        }else if(c == "+"){
            hasil = a+b
            alert("hasilnya adalah" + " " + hasil) 
            let lanjut = prompt("apakah mau dilanjutkan ? y/n")
            if(lanjut == 'y'){
               return calc()
            }else{
               return alert("terima kasih")
            }
        }else if(c == "-"){
            hasil = a-b
            alert("hasilnya adalah" + " " + hasil) 
            let lanjut = prompt("apakah mau dilanjutkan ? y/n")
            if(lanjut == 'y'){
               return calc()
            }else{
               return alert("terima kasih")
            }
        }else if(c == "%"){
            hasil = a%b
            alert("hasilnya adalah" + " " + hasil) 
            let lanjut = prompt("apakah mau dilanjutkan ? y/n")
            if(lanjut == 'y'){
               return calc()
            }else{
               return alert("terima kasih")
            }
        }else{
            return "terima kasih"
        }
}
calc()