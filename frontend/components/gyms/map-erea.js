import React, { useCallback, useEffect, useRef, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const mapStyles = {
  height: '400px',
  width: '100%',
}

const center = {
  lat: 25.033908747087793,
  lng: 121.54345715645276,
}
//25.033908747087793, 121.54345715645276 資展國際位置

export default function MapErea() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyArUxEcuZpGkUEM3MSJe3vZbsvxDOHkLsY',
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={15}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  )
}
