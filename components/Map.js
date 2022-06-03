import React, { Component, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';
import { GOOGLE_MAP_API_KEY } from "@env";

import tw from 'twrnc';
import { selectDestination, selectOrigin } from '../slices/navSlices';

const Map = () =>{
    
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(()=>{
        if( !origin || !destination ) return;
      
        //zoom & fit to marker
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"],{
            edgePadding : { top : 50, right : 50, bottom : 50, left : 50}
        })

    },[origin, destination])

    return (
            <MapView
                ref={mapRef}
                style={tw`flex-1`}
                mapType="mutedStandard"
                initialRegion={{
                latitude: origin.location.lat ?? 37.78825,
                longitude: origin.location.lng ?? -122.4324,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
            >
                { origin && destination && (
                    <MapViewDirections 
                        origin={origin.desription}
                        destination={destination.desription}
                        apikey={GOOGLE_MAP_API_KEY}
                        strokeWidth={3}
                        strokeColor="black"
                    />
                )}

                { origin?.location && (
                    <Marker 
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng 
                        }}
                        title="Origin"
                        description={origin.desription}
                        identifer="origin"
                    />
                )}

                { destination?.location && (
                    <Marker 
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng 
                        }}
                        title="Destination"
                        description={origin.desription}
                        identifer="destination"
                    />
                )}
          </MapView>
      )
}

export default Map;
  
