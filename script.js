// Initialize map
var map = L.map("map").setView([-1.286389, 36.817223], 13);

// Load tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Locations
const locations = {
  tourist: [
    { name: "Nairobi National Park", lat: -1.3733, lng: 36.8580, hours: "6AM - 6PM" },
    { name: "Karen Blixen Museum", lat: -1.3510, lng: 36.7181, hours: "8:30AM - 6PM" }
  ],
  restaurants: [
    { name: "Carnivore Restaurant", lat: -1.3281, lng: 36.8155, hours: "12PM - 11PM" },
    { name: "Talisman", lat: -1.3092, lng: 36.7429, hours: "11AM - 11PM" }
  ],
  nightlife: [
    { name: "Kiza Lounge", lat: -1.3002, lng: 36.7895, hours: "6PM - 3AM" },
    { name: "B Club", lat: -1.3001, lng: 36.7893, hours: "7PM - 4AM" }
  ],
  accommodation: [
    { name: "Villa Rosa Kempinski", lat: -1.2782, lng: 36.8155, hours: "24/7" },
    { name: "Radisson Blu Nairobi", lat: -1.2925, lng: 36.8219, hours: "24/7" }
  ]
};

let markers = [];

function showCategory(category) {
  // Clear old markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  // Add new markers
  locations[category].forEach(place => {
    let marker = L.marker([place.lat, place.lng])
      .addTo(map)
      .bindPopup(`<b>${place.name}</b><br>Hours: ${place.hours}`);
    markers.push(marker);
  });
}
