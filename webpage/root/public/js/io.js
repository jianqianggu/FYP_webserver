const socket = io();

function changed(){
var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
var sw = [sw0, sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12, sw13, sw14, sw15];

for(var i = 0; i < arr.length; i++){
if(sw[i] == true){
arr[i] = 1;
}
}

socket.emit("sw changed", arr);
}

//Listening on the event.
socket.on("update" , (arr)=>{
alert("Action acknowledged by the server" + arr);
});

