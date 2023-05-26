L.mapbox.accessToken = 'pk.eyJ1IjoiZWxpb3RoZWFkIiwiYSI6ImNrcjQxenQ0NDAyNjgycnIydjVidWt1ZnAifQ.2_F2pc3O-9vda33hh1_HSQ';
var map = L.mapbox.map('map')
    .setView([40, -74.50], 9)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));