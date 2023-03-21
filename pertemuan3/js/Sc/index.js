let selamat = true
let saldo = 0
let tarik = 1


while (selamat) {
    alert("Selamat Datang")
    let menu = prompt("Pilih Menu: 1.Cek Saldo, 2.Tarik Tunai, 3.Setor Tunai")
    if(menu == 1){
        alert('jumlah saldo' + ' '+  saldo)
         selamat = confirm('apakah transaksinya dilanjutkan')
    }else if( menu == 2){
        if(saldo > tarik){
            alert("Saldo Anda Tidak cukup")
            selamat = confirm("apakah transaksinya mau dilanjutkan?")
        }else if(saldo < tarik){
             let keluar = parseInt(prompt("Silahkan Masukan Uang yang mau anda tarik"))
             alert("Uang Anda" + " " + keluar + " "+ "silahkan diambil")
             selamat = confirm("apakah transaksinya mau dilanjutkan?")
        }
    }else if(menu == 3){
        let masuk= parseInt(prompt('Silahkan Masukan Uang Anda'))
        alert('Saldo anda'+ ' ' + masuk)
        selamat = confirm("apakah transaksinya mau dilanjutkan?")
    }
}