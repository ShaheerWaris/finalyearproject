let sensorcolor1 = null

var firebaseConfig = {
    apiKey: "AIzaSyDRbbx3JiFiro7Pux5VIHY-3AKkDED3skc",
    authDomain: "sound-test-7e856.firebaseapp.com",
    databaseURL: "https://sound-test-7e856-default-rtdb.firebaseio.com",
    projectId: "sound-test-7e856",
    storageBucket: "sound-test-7e856.appspot.com",
    messagingSenderId: "108526068616",
    appId: "1:108526068616:web:857842d5bcab606ab3903d"
  };
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


let audio = new Audio('sounds/beep.mp3');
audio.loop = true;

var number;
var database = firebase.database().ref("Sound Test");
database.on("value", function(snapshot) {
var data = snapshot.val();
number = data.value;

if (number > 0) {
if (sensorcolor1) {
    sensorcolor1.setOptions({
        fillColor: "#FF0000",
        strokeColor: "#FF0000",
    });
    audio.play();
    
  
}
showAlertDialog() 
} else {
sensorcolor1.setOptions({
    fillColor: "#008000",
    strokeColor: "#008000"
});
audio.pause();
}

});

function showAlertDialog() {
    var alertBox1 = document.getElementById('alertBox1');
    var alertBox2 = document.getElementById('alertBox2');
    var alertBox3 = document.getElementById('alertBox3');
    var alertBoxes = [alertBox1, alertBox2, alertBox3];
  
    var selectedAlertBox = null;
    var alertBoxText = "";
  
    switch (number) {
      case 1:
        selectedAlertBox = alertBox1;
        alertBoxText = "Axe sound detected!";
        break;
      case 2:
        selectedAlertBox = alertBox2;
        alertBoxText = "Handsaw sound detected!";
        break;
      case 3:
        selectedAlertBox = alertBox3;
        alertBoxText = "Chainsaw sound detected!";
        break;
      default:
        selectedAlertBox = alertBox1;
        alertBoxText = "Illegal Activity detected!";
        break;
    }
  
    var alertBoxConfirm = selectedAlertBox.querySelector('.alertBoxConfirm');
    var alertBoxContent = selectedAlertBox.querySelector('.alert-box-content');
    var alertBoxContentText = alertBoxContent.querySelector('h2');
    alertBoxContentText.innerText = alertBoxText;
  
    selectedAlertBox.style.display = 'flex';
  
    alertBoxConfirm.addEventListener('click', function() {
      selectedAlertBox.style.display = 'none';
      audio.pause();
      database.child("value").set(0);
    });
  }
  



// function showAlertDialog() {
// var alertBox = document.getElementById('alertBox');
// alertBox.style.display = 'flex';

// var alertBoxConfirm = document.getElementById('alertBoxConfirm');
// alertBoxConfirm.addEventListener('click', function() {
// alertBox.style.display = 'none';
// audio.pause();
// database.child("value").set(0);
// });

// }





function executeAfterConfirm() {
audio.pause()
}


const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');
const bottomBar = document.getElementById('bottomBar');

showButton.addEventListener('click', function() {
bottomBar.classList.remove('hidden');
});

hideButton.addEventListener('click', function() {
bottomBar.classList.add('hidden');
});



// Initialize and add the map
let map;


async function initMap() {


let position = { lat: 30.253222451247527, lng: 67.06052769282766 };

// Request needed libraries.
//@ts-ignore
let { Map } = await google.maps.importLibrary("maps");



map = new Map(document.getElementById("map"), {
zoom: 17,
center: position,
mapId: "DEMO_MAP_ID",
mapTypeId: "satellite",    
});
let triangleCoords = [

{ lat: 30.2537376631473, lng: 67.05760367282959},
{ lat: 30.251092179854382, lng: 67.05762890546156},
{ lat: 30.251367420446165, lng:  67.0626511235561 },
{ lat: 30.253870763899375, lng:  67.06240835773299},

];
let bermudaTriangle = new google.maps.Polygon({
paths: triangleCoords,
strokeColor: "#FF0000",
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: "#4caf5000",
fillOpacity: 0.35,
});

bermudaTriangle.setMap(map);

let sensorcolor = new google.maps.Circle({
   

center: new google.maps.LatLng(30.25302629461998,  67.05840404235916),
radius: 12,

strokeColor: "#4CAF50",
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: "#008000",
fillOpacity: 0.35,
});
sensorcolor.setMap(map);



sensorcolor1 = new google.maps.Circle({
   
center: new google.maps.LatLng(30.252067741064746,  67.05970207420022),
radius: 12,
strokeColor: "#4CAF50",
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: "#008000",
fillOpacity: 0.35,
});


if ("number" > 0) {
sensorcolor1.setOptions({
    fillColor: "#FF0000",
    strokeColor: "#FF0000"
});
} else {
sensorcolor1.setOptions({
    fillColor: "#008000",
    strokeColor: "#008000"
});
}



sensorcolor1.setMap(map);



let sensorcolor2 = new google.maps.Circle({
    
center: new google.maps.LatLng(30.252301058074273, 67.06130523669316),
radius: 12,
strokeColor: "#4CAF50",
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: "#008000",
fillOpacity: 0.35,
});
sensorcolor2.setMap(map);


let sensorcolor3 = new google.maps.Circle({

center: new google.maps.LatLng(30.25331119314579, 67.06005383261788),
radius: 12,
strokeColor: "#4CAF50",
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: "#008000",
fillOpacity: 0.35,
});
sensorcolor3.setMap(map);


let sensorcolor4 = new google.maps.Circle({

center: new google.maps.LatLng(30.25352466440812, 67.0616819648609),
radius: 12,
strokeColor: "#4CAF50",
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: "#008000",
fillOpacity: 0.35,
title: "sensor4",
});
sensorcolor4.setMap(map);

let circles = [sensorcolor, sensorcolor1, sensorcolor2, sensorcolor3, sensorcolor4];

// Define the two radius points
let radius1 = 80;
let radius2 = 90;
let currentRadius = radius1;
let targetRadius = radius2;
let radiusStep = 0.5; // Radius step size

function updateRadius() {
if (Math.abs(currentRadius - targetRadius) <= radiusStep) {
// Swap the target radius when the current radius is close to the target
if (targetRadius === radius1) {
targetRadius = radius2;
} else {
targetRadius = radius1;
}
}

if (currentRadius < targetRadius) {
currentRadius += radiusStep;
} else {
currentRadius -= radiusStep;
}

circles.forEach((circle) => {
circle.setRadius(currentRadius);
});
}

function startRadiusAnimation() {
setInterval(updateRadius, 40); // Update radius more frequently for smoother animation (adjust interval as needed)
}

startRadiusAnimation();

}
window.initMap=initMap();
