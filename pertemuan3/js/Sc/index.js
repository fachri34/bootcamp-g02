let selamat = true
let saldo = 0
let tarik = 1


while (selamat === true) {
    alert("Selamat Datang")
    let menu = prompt("Pilih Menu: 1.Cek Saldo, 2.Tarik Tunai, 3.Setor Tunai")
    if(menu == 1){
        alert('jumlah saldo' + ' '+  saldo)
        let lanjut = confirm('apakah transaksinya dilanjutkan')
        if(lanjut == true){
            confirm("Pilih Menu: 1.Cek Saldo, 2.Tarik Tunai, 3.Setor Tunai")
        }
    }else if( menu == 2){
        if(saldo > tarik){
            alert("Saldo Anda Tidak cukup")
        }else if(saldo < tarik){
             let keluar = parseInt(prompt("Silahkan Masukan Uang yang mau anda tarik"))
             alert("Uang Anda" + " " + keluar + " "+ "silahkan diambil")
        }
    }else if(menu == 3){
        let masuk= parseInt(prompt('Silahkan Masukan Uang Anda'))
        alert('Saldo anda'+ ' ' + masuk)
    }
}