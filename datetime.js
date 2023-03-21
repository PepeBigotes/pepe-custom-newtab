console.log("[LOG] datetime.js: loaded");
var today = new Date();
function setDateTime(){
    console.log("[LOG] datetime.js: setDateTime() executed");
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
    var time = hh+":"+mm+":"+ss;

    var date = today.getDate()+
        '/'+(today.getMonth()+1)+
        '/'+today.getFullYear();

    document.getElementById("timeheader").innerHTML = time;
    }
setDateTime();
setInterval(setDateTime, 1000);