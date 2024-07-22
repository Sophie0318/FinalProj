import React, { useCallback, useEffect, useRef, useState } from 'react'
import GymCardSpot from './gymCard-spot'
import styles from './map-erea.module.css'
import {
  Autocomplete,
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

export default function MapErea({ gymsData, searchTerm }) {
  const mapStyles = {
    height: '100%',
    width: '100%',
  }
  const [center, setCenter] = useState({
    lat: 25.04510954594513,
    lng: 121.52343310812854,
  })
  const [selectedMarker, setSelectedMarker] = useState('')

  // useEffect(() => {
  //   handleSearch()
  // }, [searchTerm])
  const handleMapClick = () => {
    setSelectedMarker(null);
  };
  const handleSearch = () => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder()
      geocoder.geocode({ address: searchTerm }, (results, status) => {
        if (status === 'OK') {
          const { lat, lng } = results[0].geometry.location
          setCenter({ lat: lat(), lng: lng() })
          if (map) {
            map.panTo({ lat: lat(), lng: lng() })
          }
        } else {
          console.log(
            'Geocode was not successful for the following reason: ' + status
          )
        }
      })
    }
  }

  const gymsDatatoGeoJson = (gymsData) => {
    if (!Array.isArray(gymsData)) {
      console.error('Invalid gymsData Structure .應該要是 Array', gymsData)
      return null
    }

    // 1. 先轉成 GeoJson
    return {
      type: 'FeatureCollection',
      features: gymsData.map((gym) => ({
        type: 'Feature',
        properties: {
          gym_id: gym.gym_id,
          name: gym.gym_name,
          subtitle: gym.gym_subtitle,
          address: gym.gym_address,
          phone: gym.gym_phone,
          businessHours: gym.business_hours,
          gym_info: gym.gym_info,
          gym_price: gym.gym_price,
          gym_equipment: gym.gym_equipment,
          is_elderly: gym.is_elderly,
          features: gym.feature_list,
          images: gym.image_list,
        },
        geometry: {
          type: 'Point',
          coordinates: [parseFloat(gym.longitude), parseFloat(gym.latitude)],
        },
      })),
    }
  }

  const [geoJsonData, setGeoJsonData] = useState(null)

  useEffect(() => {
    if (gymsData) {
      const covertedData = gymsDatatoGeoJson(gymsData)
      setGeoJsonData(covertedData)
      // console.log(geoJsonData, 'geoJsonData')
      handleSearch()
    }
  }, [gymsData])

  const [map, setMap] = useState(null)
  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(center)
      map.fitBounds(bounds)
      setMap(map)
    },
    [center]
  )

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // libraries: ['places'],
  })
  if (!isLoaded) {
    return (
      <h5 style={{ textAlign: 'center', lineHeight: '300px' }}>Loading...</h5>
    )
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={13}
      center={center}
      onClick={handleMapClick}
      onLoad={(map) => setMap(map)}
      onUnmount={onUnmount}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker
        position={center}
        options={{
          icon: {
            url: '/map-marker-smile-fill.svg',
            scaledSize: new window.google.maps.Size(50, 50),
          },
        }}
      />
      {geoJsonData.features.map((feature) => (
        <Marker
          key={feature.properties.gym_id}
          position={{
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0],
          }}
          onClick={() => setSelectedMarker(feature)}
          
          title={feature.properties.gym_name}
          options={{
            icon: {
              url: '/fi-sr-marker.svg',
              scaledSize: new window.google.maps.Size(50, 50),
            },
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.geometry.coordinates[1],
            lng: selectedMarker.geometry.coordinates[0],
          }}
          onCloseClick={() => setSelectedMarker(null)}
          options={{
            pixelOffset: new window.google.maps.Size(0, -40),
            // className: styles.infoWindow,
          }}
        >
          <div className={styles.infoWindow}>
            <GymCardSpot data={selectedMarker.properties} />
          </div>
        </InfoWindow>
      )}
      {/* {console.log(selectedMarker.properties)} */}
    </GoogleMap>
  ) : (
    <>
      <h6>Loading...</h6>
    </>
  )
}
