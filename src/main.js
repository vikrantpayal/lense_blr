// Import Leaflet library
import L from 'leaflet';

// Initialize the map
const map = L.map('map').setView([12.971598, 77.594562], 13); // Set initial view to Bangalore, India

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
