/* GETDAY.JS */

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday", "Monday"];

const d = new Date();

function mywkday(dday){
    return weekday[dday];
}

document.getElementById("txtday1").innerHTML = mywkday(d.getDay());
document.getElementById("txtday2").innerHTML = mywkday(d.getDay()+1);
document.getElementById("txtday3").innerHTML = mywkday(d.getDay()+2);
