const socket = io();

function changed(){
    var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    var sw0 = document.getElementById('sw0_cb').checked;
    var sw1 = document.getElementById('sw1_cb').checked;
    var sw2 = document.getElementById('sw2_cb').checked;
    var sw3 = document.getElementById('sw3_cb').checked;
    var sw4 = document.getElementById('sw4_cb').checked;
    var sw5 = document.getElementById('sw5_cb').checked;
    var sw6 = document.getElementById('sw6_cb').checked;
    var sw7 = document.getElementById('sw7_cb').checked;
    var sw8 = document.getElementById('sw8_cb').checked;
    var sw9 = document.getElementById('sw9_cb').checked;
    var sw10 = document.getElementById('sw10_cb').checked;
    var sw11 = document.getElementById('sw11_cb').checked;
    var sw12 = document.getElementById('sw12_cb').checked;
    var sw13 = document.getElementById('sw13_cb').checked;
    var sw14 = document.getElementById('sw14_cb').checked;
    var sw15 = document.getElementById('sw15_cb').checked;
    if (sw0){
        arr[0] = 1
    }
    if (sw1){
        arr[1] = 1
    }
    if (sw2){
        arr[2] = 1
    }
    if (sw3){
        arr[3] = 1
    }
    if (sw4){
        arr[4] = 1
    }
    if (sw5){
        arr[5] = 1
    }
    if (sw6){
        arr[6] = 1
    }
    if (sw7){
        arr[7] = 1
    }
    if (sw8){
        arr[8] = 1
    }
    if (sw9){
        arr[9] = 1
    }
    if (sw10){
        arr[10] = 1
    }
    if (sw11){
        arr[11] = 1
    }
    if (sw12){
        arr[12] = 1
    }
    if (sw13){
        arr[13] = 1
    }
    if (sw14){
        arr[14] = 1
    }
    if (sw15){
        arr[15] = 1
    }
    socket.emit("sw changed", arr);
}


//Listening on the event. 
socket.on("acknowledged" , ()=>{ 
    alert("Action acknowledged by the server"); 
});