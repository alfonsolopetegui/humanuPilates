"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
import styles from "./googleMap.module.css"; // Asegúrate de que este archivo CSS exista



const GoogleMapComponent = () => {
  const [selected, setSelected] = useState(null); // Estado para manejar el marcador seleccionado

  const api_key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const center = {
    lat: -34.615851928206176, // Cambia a la latitud deseada
    lng: -58.44089781811042, // Cambia a la longitud deseada
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
  ];

  return (
    <LoadScript googleMapsApiKey={api_key}>
      <div className={styles.mapContainer}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%", // Ancho al 100% del contenedor
            height: "100%", // Alto al 100% del contenedor
          }}
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
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
