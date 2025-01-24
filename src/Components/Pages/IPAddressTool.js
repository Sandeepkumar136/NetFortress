import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const IPAddressTool = () => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the API key from the environment variable
  const API_KEY = process.env.REACT_APP_IP_GEOLOCATION_API_KEY;

  useEffect(() => {
    const fetchIpData = async () => {
      if (!API_KEY) {
        setError("API key is missing.");
        setLoading(false);
        return;
      }

      try {
        // Make the API request with the API key
        const response = await axios.get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`
        );

        setIpData(response.data); // Set the fetched data to state
        setLoading(false); // Stop loading after data is fetched
      } catch (err) {
        setError("Failed to fetch IP address data.");
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchIpData(); // Fetch data when component mounts
  }, [API_KEY]);

  // Show loading state while data is being fetched
  if (loading) return <div>Loading...</div>;

  // Show error message if the API request failed
  if (error) return <div>{error}</div>;

  // Display IP data and map
  const position = [ipData.latitude, ipData.longitude]; // Lat, Long for the map

  return (
    <div className="ip-address-container">
      <h2>Your IP Address Information</h2>
      <p><strong>IP Address:</strong> {ipData.ip}</p>
      <p><strong>Location:</strong> {ipData.city}, {ipData.country_name}</p>
      <p><strong>Latitude:</strong> {ipData.latitude}</p>
      <p><strong>Longitude:</strong> {ipData.longitude}</p>
      <p><strong>Time Zone:</strong> {ipData.time_zone.name}</p>
      <p><strong>ISP:</strong> {ipData.isp}</p>

      {/* Map Section */}
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span>
                {ipData.city}, {ipData.country_name}
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default IPAddressTool;
