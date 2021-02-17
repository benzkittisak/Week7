const  highestDigit = (num) =>{
    /*
    let x = num.toString().split('');
    let result = [];
    for(let temp of x ){
        result.push(parseInt(temp));
    }
    return Math.max(...result);*/

    /** 379 => "379" ["3","7","9"] */
    let x = num.toString().split('');
    let max = 0; 
    for(let y of x){
        if(max < y) max = y;
    }
    return parseInt(max);

}
console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))