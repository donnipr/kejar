function kalkulator() {
    let angka = document.querySelectorAll('input');
    let i1= parseInt(angka[0].value) ; //angka pertama
    let i2= parseInt(angka[1].value) ; //angka kedua
    angka[2].value=  parseInt(i1+i2) ;
    }
    let tombol = document.querySelector('button');
    tombol.addEventListener('click', kalkulator);
