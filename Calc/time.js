function digitalClock(time){
    let hour = (Math.floor(time / 3600) < 10) ? `0${Math.floor(time / 3600)}` : Math.floor(time / 3600) ;
    time -= hour * 3600;
    let mins = (Math.floor(time / 60) < 10) ? `0${Math.floor(time / 60)}` : Math.floor(time / 60) ;
    time -= mins * 60 ;
    let secs = (time < 10) ? `0${time}` : time ;
    
    return `${hour}:${mins}:${secs}`;

}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));