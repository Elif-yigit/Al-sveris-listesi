
let listeler = [];

function UrunEkle () {


  let yeniUrunEkle = prompt ('Kaç adet ürün eklemek istersiniz? ');

  for ( let i = 0; i < yeniUrunEkle; i++) {

    let liste = prompt('Ürün giriniz');
    listeler.push(liste);
  }

  console.log('Alışveriş Listesi: ' , listeler);
  console.log(listeler.length);
 
}

UrunEkle ();
