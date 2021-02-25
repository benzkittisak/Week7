function capToFront (text){
    let up = "";
    let low = "";
    for(let chr of text){
       if(chr === chr.toUpperCase()){
           up += chr;
       }
       else{
          low += chr;
       }
    }
    return up+low;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));