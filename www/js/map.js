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