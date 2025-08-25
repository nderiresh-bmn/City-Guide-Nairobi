// Initialize map
const map = L.map('mapid').setView([-1.2921, 36.8219], 12);

// Load map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

// Layers for filters
const layers = {
  tourist: L.layerGroup(),
  restaurants: L.layerGroup(),
  nightlife: L.layerGroup(),
  rentals: L.layerGroup()
};

// Example markers
L.marker([-1.2921, 36.8219]).bindPopup("Nairobi National Museum<br>9am - 5pm").addTo(layers.tourist);
L.marker([-1.3733, 36.8580]).bindPopup("Nairobi National Park<br>6am - 6pm").addTo(layers.tourist);
L.marker([-1.2833, 36.8167]).bindPopup("Carnivore Restaurant").addTo(layers.restaurants);
L.marker([-1.3000, 36.8000]).bindPopup("Kiza Lounge - Nightlife").addTo(layers.nightlife);
L.marker([-1.3100, 36.8300]).bindPopup("Westlands Airbnb - $50/night").addTo(layers.rentals);

// Toggle layers
function toggleLayer(type) {
  if (map.hasLayer(layers[type])) {
    map.removeLayer(layers[type]);
  } else {
    map.addLayer(layers[type]);
  }
}
