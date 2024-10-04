"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const mapContainerStyle = {
  width: "500px",
  height: "400px",
};

const mapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#192c66",
      },
      {
        lightness: 17,
      },
    ],
  },
  // Agrega más estilos aquí...
];

const center = {
  lat: -34.615851928206176, // Cambia a la latitud deseada
  lng: -58.44089781811042, // Cambia a la longitud deseada
};

// Aquí agregas tu estilo personalizado
const mapOptions = {
  styles: [
    {
      featureType: "water",
      stylers: [{ color: "#19a0d8" }],
    },
    {
      featureType: "landscape",
      stylers: [{ color: "#f7f1df" }],
    },
    // Agrega más estilos según necesites
  ],
};

const GoogleMapComponent = () => {
  const [selected, setSelected] = useState(null); // Estado para manejar el marcador seleccionado

  const api_key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={api_key}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        options={{ styles: mapStyles }}
      >
        <Marker
          position={center}
          onClick={() => {
            setSelected(center); // Actualiza el marcador seleccionado
          }}
        />

        {selected ? (
          <InfoWindow
            position={selected}
            onCloseClick={() => {
              setSelected(null); // Cierra el InfoWindow
            }}
          >
            <div>
              <h2>Humanu Pilates</h2> {/* Cambia esto al nombre del lugar */}
              <p>El mejor lugar para tu bienestar</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
