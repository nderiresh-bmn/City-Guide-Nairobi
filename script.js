// Tab switching
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// Initialize OpenStreetMap
const map = L.map('map').setView([-1.286389, 36.817223], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load locations from JSON
fetch('places.json')
  .then(response => response.json())
  .then(data => {
    data.places.forEach(place => {
      L.marker([place.lat, place.lon])
        .addTo(map)
        .bindPopup(`<b>${place.name}</b><br>${place.category}`);
    });
  });
