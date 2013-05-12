var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;


function getMyLocation(){
	if(navigator.geolocation){	
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	}
}

function  displayLocation(position) {
	alert("work");
	var latitude = position.coords.latitude;
	//alert("work");
	var longitude = position.coords.longitude;
	if(map == null){
		showMap(position.coords);
	}
}


function onSuccess(position) {
 
    var myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    directionsDisplay = new google.maps.DirectionsRenderer();
    alert(1);
    map  = new google.maps.Map(document.getElementById('googleMap'), {
                               mapTypeId: google.maps.MapTypeId.ROADMAP,
                               center: myLocation,
                               zoom: 15,
                               disableDefaultUI: true
                               });
    directionsDisplay.setMap(map);
  
}
function displayError(error){
	alert("not work");
	var errorTypes = {
		0: "Unknow error",
		1: "Permission denied by user",
		2: "Position is not available",
		3: "Request timed out"
	};
	var errorMessage = errorTypes[error.code];
	if(error.code == 0 || error.code ==2 ){
		errorMessage = errorMessage + " " + error.message;
	}
	alert(errorMessage);
	document.getElementById("error").innerHTML = errorMessage;
}

function initialize(){
    document.addEventListener("deviceready", onDeviceReady, false);
 
    function onDeviceReady() {
        // get device's geographical location and return it as a Position object (which is then passed to onSuccess)
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    
    
    
    
    
	
}

function addMarker (map, latlong, title, content){
  var markerOptions = {
      position:latlong,
      map:map
  };
  var marker = new google.maps.Marker(markerOptions);
}

function clear(){
}

function drawRoute(){
	var start = document.getElementById('origin').value;
	
	var end = document.getElementById('destination').value;
	
	
	var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.DirectionsTravelMode.TRANSIT
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}