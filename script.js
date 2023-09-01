// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Add a tile layer (you can customize the tile source if needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// GeoJSON data for India's border (simplified)
const indiaBorder = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        // Add the coordinates here
      ]
    }
  };
  
  // Create a GeoJSON layer and add it to the map
  L.geoJSON(indiaBorder).addTo(map);
  