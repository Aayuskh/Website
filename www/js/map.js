window.onload = getMyLocation;
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

function initialize(){
	var googleLatAndLong = new google.maps.LatLng(40.4441236,-79.94534760);
	var mapProp = {
		center: googleLatAndLong,
		zoom:12,
		disableDefaultUI: true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googleMap")
	  ,mapProp);
	addMarker(map, googleLatAndLong);
}

function addMarker (map, latlong, title, content){
  var markerOptions = {
      position:latlong,
      map:map
  };
  var marker = new google.maps.Marker(markerOptions);
}