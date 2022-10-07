var date= new Date();
var current_date=date.getFullYear()+ "-" + (date.getMonth()+1) + "-" + date.getDate();
var current_time = date.getHours()+ ":" + date.getMinutes()+ ":" + date.getSeconds();
var date_time = "Date:" + current_date +"  Time " + current_time;
document.getElementById("p2").innerHTML=date_time;