function bintang(panjang) {
    let hasil = ' ';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(bintang(15));

// Syntax tersebut merupakan implementasi dari sebuah fungsi bernama bintang yang memiliki satu parameter yaitu panjang. 
//Fungsi ini mengembalikan segitiga dengan pola bintang (*) yang memiliki tinggi sebanyak nilai dari parameter panjang.
// Pada baris pertama fungsi bintang, sebuah variabel bernama hasil diinisialisasi dengan nilai string kosong (''). 
//Kemudian, dilakukan perulangan menggunakan for dari i yang diinisialisasi dengan nilai 0, dan akan berhenti saat i kurang dari panjang. 
//Setiap kali perulangan dilakukan, sebuah perulangan dalam juga dilakukan menggunakan for dari j yang diinisialisasi dengan nilai 0, dan akan berhenti saat j kurang dari atau sama dengan i. 
//Di dalam perulangan dalam tersebut, karakter bintang (*) beserta spasi ditambahkan ke variabel hasil.
// Setelah perulangan dalam selesai dilakukan, karakter baris baru (\n) ditambahkan ke variabel hasil untuk membuat baris baru pada setiap akhir baris pada segitiga. Setelah perulangan luar selesai dilakukan, variabel hasil yang sudah berisi pola segitiga bintang akan dikembalikan oleh fungsi. 
//Terakhir, nilai yang dikembalikan oleh fungsi akan dicetak di console menggunakan console.log().