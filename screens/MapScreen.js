import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOption from '../components/RideOption';

const MapScreen = () => {
   
   const Stack = createNativeStackNavigator();

   return (
      <View style={tw`bg-white h-full`}>
         <View style={tw`h-1/2`}> 
            <Map />
         </View>
         <View style={tw`h-1/2`}>
            <Stack.Navigator>
               <Stack.Screen name="NavigateCard" component={NavigateCard} options={{
                  headerShown : false
                }}/>

               <Stack.Screen name="RideOption" component={RideOption} options={{
                  headerShown : false
                }}/>
            </Stack.Navigator>
         </View>
      </View>
    )
}
 
  

export default MapScreen

const styles =  StyleSheet.create({

});

