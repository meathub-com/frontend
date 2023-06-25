import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

export const OffersMap = () => {
  const mapRef = useRef(null);
  const [pins, setPins] = useState([
    [52.2291,20.9991],
    [50.0614, 19.9366],
    [53.1333, 23.1643],
  
    // Add more positions as needed
  ]);

  useEffect(() => {
    // Define some random cities in Poland
    const cities = ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw', 'Poznan', 'Lodz'];

    // Fetch geocodes for each city
    cities.forEach(city => {
      axios.get(`https://geocode.maps.co/search?q=${city}`)
        .then(res => {
          const location = res.data.results[0].geometry;
          setPins(pins => [...pins, [location.lat, location.lng]]);
        })
        .catch(err => console.error(err));
    });

    if (!mapRef.current) {
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
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // Add new pins to the map
      pins.forEach(([lat, lng]) => {
        L.marker([lat, lng]).addTo(mapRef.current);
      });
    }
  }, [pins]);

  return <div id="map" style={{ height: "700px", width: "100%" }} />;
};
