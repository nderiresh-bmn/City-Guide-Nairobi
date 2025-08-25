import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";

// Tourist Data (seeded from Nairobi highlights)
const touristSpots = [
  { name: "Nairobi National Park", lat: -1.3733, lng: 36.8580, hours: "06:00 - 18:00" },
  { name: "Karen Blixen Museum", lat: -1.3517, lng: 36.7181, hours: "08:30 - 17:30" },
  { name: "Giraffe Centre", lat: -1.3733, lng: 36.7517, hours: "09:00 - 17:00" },
  { name: "Nairobi National Museum", lat: -1.2741, lng: 36.8126, hours: "08:30 - 17:30" },
];

const restaurants = [
  { name: "Carnivore Restaurant", lat: -1.3222, lng: 36.8369, type: "Grill" },
  { name: "Talisman Restaurant", lat: -1.3135, lng: 36.7194, type: "Fusion" },
  { name: "Java House Kimathi Street", lat: -1.2834, lng: 36.8219, type: "Cafe" },
];

const nightlife = [
  { name: "Kiza Lounge", lat: -1.2654, lng: 36.8103, vibe: "Afrobeat & Cocktails" },
  { name: "B-Club", lat: -1.2839, lng: 36.8121, vibe: "Luxury Nightlife" },
  { name: "The Alchemist", lat: -1.2664, lng: 36.8028, vibe: "Open-air, DJs & Food trucks" },
];

const accommodations = [
  { name: "Villa Rosa Kempinski", lat: -1.2732, lng: 36.8155, type: "Luxury Hotel" },
  { name: "Radisson Blu Upper Hill", lat: -1.3001, lng: 36.8164, type: "Business Hotel" },
  { name: "Airbnb - Westlands Loft", lat: -1.2642, lng: 36.8129, type: "Short Stay Apartment" },
];

export default function CityGuideNairobi() {
  const [activeLayer, setActiveLayer] = useState("tourist");

  const renderMarkers = (layer) => {
    switch (layer) {
      case "tourist":
        return touristSpots.map((spot, i) => (
          <Marker key={i} position={[spot.lat, spot.lng]}>
            <Popup>
              <b>{spot.name}</b>
              <br />Hours: {spot.hours}
            </Popup>
          </Marker>
        ));
      case "restaurants":
        return restaurants.map((r, i) => (
          <Marker key={i} position={[r.lat, r.lng]}>
            <Popup>
              <b>{r.name}</b>
              <br />Cuisine: {r.type}
            </Popup>
          </Marker>
        ));
      case "nightlife":
        return nightlife.map((n, i) => (
          <Marker key={i} position={[n.lat, n.lng]}>
            <Popup>
              <b>{n.name}</b>
              <br />{n.vibe}
            </Popup>
          </Marker>
        ));
      case "accommodations":
        return accommodations.map((a, i) => (
          <Marker key={i} position={[a.lat, a.lng]}>
            <Popup>
              <b>{a.name}</b>
              <br />Type: {a.type}
            </Popup>
          </Marker>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">City Guide Nairobi</h1>
        <div className="flex gap-2">
          <Button onClick={() => setActiveLayer("tourist")}>Tourist Spots</Button>
          <Button onClick={() => setActiveLayer("restaurants")}>Restaurants</Button>
          <Button onClick={() => setActiveLayer("nightlife")}>Nightlife</Button>
          <Button onClick={() => setActiveLayer("accommodations")}>Accommodation</Button>
        </div>
      </header>

      <main className="p-4">
        <div className="h-[80vh] rounded-xl overflow-hidden shadow-lg">
          <MapContainer center={[-1.286389, 36.817223]} zoom={12} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {renderMarkers(activeLayer)}
          </MapContainer>
        </div>
        <p className="mt-4 text-gray-600">Use the buttons above to toggle between attractions, restaurants, nightlife, and accommodation options in Nairobi.</p>
      </main>
    </div>
  );
}
