
var lagi = true
var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'h') {

     while (lagi === true) {
  var nama = prompt('Tak kenal maka tak sayang\n(Isi nama ishh)');
  alert('Halo ' +nama +' salam kenal');
  alert('Lama tak berjumpa ya' + ' '+ nama);
  alert('Cuman mau beritahu aja ' +nama);
  alert('Untuk full screen tinggal tekan f11');
  alert('Ok itu aja informasinya, selebihnya terimakasih '+ nama);
  lagi = confirm('Mau baca informasinya lagi?');

}
alert('Enjoy this web ' + nama);
alert('And one thing miss you xrvfun');

     localStorage.setItem('alerted','h');
    }

