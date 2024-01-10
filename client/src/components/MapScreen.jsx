import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function MapScreen() {
  return ( 
    <div id="map-screen">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapScreen;