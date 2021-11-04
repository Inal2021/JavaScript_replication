//Kullanicidan kullanici adi ve sifre isteyelim, dogru olana kadar deneme yapsin;


var userName ="guest";
var password ="password";
var check =false;

while (check==false) {
  var k_user=prompt("lütfen kullanici adi giriniz");
  var k_password = prompt("lütfen sifrenizi giriniz");

  if ((k_user==userName)&&(k_password==password)) {

    document.write("SIFRE DOGRU")
    console.log("Sifre dogru, Hosgeldiniz");
    check=true;
  } else {
    document.write("SIFRE YANLIS")
    console.log("sifre yanlis lütfen tekrar deneyiniz");
  }

}
