/* GETDAY.JS */

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day1 = weekday[d.getDay()];
let day2 = weekday[d.getDay()+1];
let day3 = weekday[d.getDay()+2];

document.getElementById("txtday1").innerHTML = day1;
document.getElementById("txtday2").innerHTML = day2;
document.getElementById("txtday3").innerHTML = day3;