// Import Leaflet library
import L from 'leaflet';

// Initialize the map
const map = L.map('map').setView([51,-0], 13); // Set initial view to Bangalore, India

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
 