// Initialize Map
const map = L.map('nairobiMap').setView([-1.286389, 36.817223], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Create Layer Groups
const layers = {
  tourist: L.layerGroup().addTo(map),
  restaurant: L.layerGroup().addTo(map),
  nightlife: L.layerGroup().addTo(map),
  rental: L.layerGroup().addTo(map),
};

// Add markers
spots.forEach(spot => {
  const marker = L.marker(spot.coords)
    .bindPopup(`<b>${spot.name}</b><br>Hours: ${spot.hours}`);
  layers[spot.type].addLayer(marker);
});

// Toggle filters
document.querySelectorAll('.map-filters input').forEach(input => {
  input.addEventListener('change', (e) => {
    const type = e.target.value;
    if (e.target.checked) {
      map.addLayer(layers[type]);
    } else {
      map.removeLayer(layers[type]);
    }
  });
});
