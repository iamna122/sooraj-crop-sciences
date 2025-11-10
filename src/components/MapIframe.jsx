// // src/components/MapLeaflet.jsx
// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// /**
//  * MapLeaflet - shows office location using leaflet + OpenStreetMap.
//  *
//  * Props:
//  *  - position: [lat, lng] default to sample coords
//  *  - zoom: number
//  *  - officeName: string
//  *  - address: string
//  */

// // Fix default marker icons (CRA + Leaflet quirk)
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: '/images/marker-icon-2x.png',
//   iconUrl: '/images/marker-icon.png',
//   shadowUrl: '/images/marker-shadow.png',
// });

// export default function MapLeaflet({position=[31.5204,74.3587], zoom=13, officeName="Sooraj Crop Sciences", address="Lahore, Pakistan"}){
//   return (
//     <div className="map" aria-hidden={false}>
//       <MapContainer center={position} zoom={zoom} style={{height:"100%", width:"100%"}}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             <strong>{officeName}</strong><br />{address}
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }
