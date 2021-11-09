var now=2021;

function yasHesaplama(old){
  return now-old
}

var basri=yasHesaplama(1980)
var tahir=yasHesaplama(1984)
var ahmet=yasHesaplama(1985)

console.log("Basri "+basri+" yasindadir");
console.log("tahir "+tahir+" yasindadir");
console.log("ahmet "+ahmet+" yasindadir");


// emekliliklerini yasHesaplama

function emeklilik(isim, yas) {
  var kullaniciYas=yasHesaplama(yas);
  var kacYasEmeklilik=65-kullaniciYas;

if(kacYasEmeklilik>0) {
  console.log(isim+" adli sahis "+kacYasEmeklilik+" yil sonra emekli olacak");
}else {
  console.log(isim+" adli sahis "+(-kacYasEmeklilik)+" yil önce emekli olmustur.");
}
}

emeklilik('merve',1998)
emeklilik('dede',1932)
