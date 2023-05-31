// L.mapbox.accessToken =
//   "pk.eyJ1IjoiZWxpb3RoZWFkIiwiYSI6ImNrcjQxenQ0NDAyNjgycnIydjVidWt1ZnAifQ.2_F2pc3O-9vda33hh1_HSQ";
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);
// var popup = L.popup();

// function onMapClick(e) {
// //   popup
// //     .setLatLng(e.latlng)
// //     .setContent("You clicked the map at " + e.latlng.toString())
// //     .openOn(map);
//     map.locate({setView: true, maxZoom: 16});
// }

// map.on("click", onMapClick);
