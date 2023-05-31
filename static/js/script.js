L.mapbox.accessToken =
  "pk.eyJ1IjoiZWxpb3RoZWFkIiwiYSI6ImNrcjQxenQ0NDAyNjgycnIydjVidWt1ZnAifQ.2_F2pc3O-9vda33hh1_HSQ";
var map = L.mapbox
  .map("map")
  .setView([40, -74.5], 9)
  .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));

var popup = L.popup();

function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
    map.locate({setView: true, maxZoom: 16});
}

map.on("click", onMapClick);
