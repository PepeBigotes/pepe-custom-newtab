console.log("[LOG] datetime.js: loaded");
var today = new Date();

function setDateTime(){
    console.log("[LOG] datetime.js: setDateTime() executed");
    today = new Date();

    var hh = today.getHours();
    if (1 <= hh && hh <= 9){
        hh = "0" + hh;
    }
    if (hh == 0){
        hh = "00";
    }
    var mm = today.getMinutes();
    if (1 <= mm && mm <= 9){
        mm = "0" + mm;
    }
    if (mm == 0){
        mm = "00";
    }
    var ss = today.getSeconds();
    if (1 <= ss && ss <= 9){
        ss = "0" + ss;
    }
    if (ss == 0){
        ss = "00";
    }
    
    var YY = today.getFullYear();
    
    var MM = today.getMonth() + 1;
    if (MM < 10) {
        MM = "0" + MM;
    }
    if (MM == 0){
        MM = "00";
    }
    
    var DD = today.getDate();
    if (DD < 10) {
        DD = "0" + DD;
    }
    if (DD == 0){
        DD = "00";
    }
    
    var time = hh+":"+mm+":"+ss;
    var date = DD+"/"+MM+"/"+YY;
    
    document.getElementById("timeheader").innerHTML = time;
    document.getElementById("dateheader").innerHTML = date;
    }
setDateTime();
setInterval(setDateTime, 1000);