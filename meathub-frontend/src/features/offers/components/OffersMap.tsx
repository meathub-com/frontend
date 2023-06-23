import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const OffersMap = () => {
  const mapRef = useRef(null);

  // Define some random positions for pins around Poland
  const pins = [
    [52.1934, 21.0343],
    [50.0614, 19.9366],
    [53.1333, 23.1643],
    [50.2649, 18.9656],
    [51.7592, 18.0910],
    [53.7799, 20.4942]
    // Add more positions as needed
  ];

  useEffect(() => {
    // If the map is already initialized, return out of the effect
    if (mapRef.current) return;

    // Initialize the map centered on Warsaw with a zoom level of 6 to view the whole of Poland
    mapRef.current = L.map('map', {
      center: [52.2297, 21.0122],  // Warsaw latitude and longitude
      zoom: 6
    });

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key={accessToken}', {
      attribution: '<a href="https://www.maptiler.com/copyright/">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'uGVNQq4wb1hMW4Hmw1eJ' // Your MapTiler access token
    }).addTo(mapRef.current);

    // Add pins to the map
    pins.forEach(([lat, lng]) => {
      L.marker([lat, lng]).addTo(mapRef.current);
    });

  }, []);

  return <div id="map" style={{ height: "700px", width: "100%" }} />;
};
