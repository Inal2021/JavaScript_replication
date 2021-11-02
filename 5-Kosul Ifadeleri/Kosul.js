// if/else

var marka="Audi";
var model="q3";
var vites="otomatik";

if (vites=='otomatik') {
console.log(marka+" "+model+' araba otomatik vitestir.');
} else {
  console.log(marka+" "+model+' araba otomatik vites DEGILDIR.');
}

var sanzuman=Number(prompt("Lütfen vites no girin"));
// if (sanzuman==1) {
// console.log(marka+" "+model+' araba otomatik vitestir.');
// } else if (sanzuman==2) {
//   console.log(marka+" "+model+' araba otomatik vites DEGILDIR.');
// } else {
//   console.log("yanlis veri girisi");
// }

//switch-case statement

switch (sanzuman) {
  case 1: console.log(marka+" "+model+' araba otomatik vitestir.');
    break;
    case 2: console.log(marka+" "+model+' araba otomatik DEGILDIR.');
      break;
      case 3: console.log(marka+" "+model+' araba TRIPTRONIC tir..');
        break;
  default:
  console.log("yanlis veri girisi");
}
