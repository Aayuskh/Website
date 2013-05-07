

function initialize(){

	var mapProp = {
		center: new google.maps.LatLng(40.4441236,-79.94534760),
		zoom:12,
		disableDefaultUI: true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googleMap")
	  ,mapProp);

}
