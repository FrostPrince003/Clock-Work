const dtime = document.querySelector(".time")
let session = "AM";
function showTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if(hours > 12 ){
    session = "PM";
    hours = hours - 12;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(hours < 10){
    hours = "0" + hours;
}
if(seconds < 10){
    seconds = "0" + seconds;
} 
dtime.textContent = hours + ":" + minutes + ":" + seconds + ":" + session;
}
setInterval(showTime,1000);