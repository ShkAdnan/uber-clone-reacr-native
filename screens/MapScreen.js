import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import Map from '../components/Map';

const MapScreen = () => {
    return (
      <View style={tw`bg-white h-full`}>
         <Text>Map Screen</Text>
         <View style={tw`h-1/2`}> 
            <Map />
         </View>
         <View style={tw`h-1/2`}></View>
      </View>
    )
}
 
  

export default MapScreen

const styles =  StyleSheet.create({

});

