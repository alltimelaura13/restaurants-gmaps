var map;
var currentMarker;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    fullscreenControl: false,
    center: {
      lat: 40.392694,
      lng: -3.698421
    },
    zoom: 14
  });
  setListener();
}

function setListener() {
  map.addListener('click', function(event){
    addMarker(event.latLng.toJSON());

    })
}

function addMarker(position) {
  new google.maps.Marker({
    position: position,
    map: map
  });
}
