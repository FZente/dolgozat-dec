//1. feladat: Credit Card Mask
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
}

//2. feladat: Is this a triangle?
function isTriangle(a,b,c) {
	if(a > 0 && b > 0 && c > 0) {
        if(a < b + c && b < a + c && c < a + b) {
            return true;
        }
        else {
    	    return false;
        }
    }
	else {
        return false;
	}
}

//3. feladat: Easy Time Convert
function timeConvert(num) { 
    let ora = Math.floor(num / 60)
    let perc = num % 60
    if (num <= 0){
      return "00:00"
    }
    else if (ora < 10 && perc < 10){
      return `0${ora}:0${perc}`
    }
    else if (ora < 10 && perc >= 10){
      return `0${ora}:${perc}`
    }
    else if (ora >= 10 && perc < 10){
      return `${ora}:0${perc}`
    }
    else if (ora >= 10 && perc >= 10){
      return `${ora}:${perc}`
    }
  }

//4. feladat: Number to digit tiers

function createArrayOfTiers(num) {
    var szamok = ''
    return[...num+ ''].map((value)=>{
    return szamok += value
    })
}