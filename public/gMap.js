
var map;

function initMap() {

    var singapore = {lat: 1.3521, lng: 103.8198};
    var bishan = { lat: 1.344064, lng: 103.854124};


    map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: singapore});

    var marker = new google.maps.Marker({ position: singapore, map: map });



    var marker_two = new google.maps.Marker({ position: bishan, map: map});
};
// initMap();