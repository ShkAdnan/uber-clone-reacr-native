import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from "@env";
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlices';
import NavFav from '../components/NavFav';


const HomeScreen = () => {
    
    const dispatch = useDispatch();
    
    
    return (
      <View style={tw`bg-white h-full`}>
          <View style={tw`p-5`}>
              <Image 
                style={{
                    width : 100,
                    height : 100,
                    resizeMode : 'contain'
                }}
                source={{
                    uri : 'https://links.papareact.com/gzs'
                }}
              />
              <GooglePlacesAutocomplete 
                placeholder='Where From?'
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                styles={{
                    container : {
                        flex : 0
                    },
                    textInput : {
                        fontSize : 18
                    }
                }}
                onPress={( data , details = null )=>{
                    dispatch(setOrigin({
                        location : details.geometry.location,
                        desription : data.description
                    }))

                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key : GOOGLE_MAP_API_KEY,
                    language : 'en'
                }}
              />
            <NavOptions />
            <NavFav />
          </View>
      </View>
    )
}
 
  

export default HomeScreen

const styles =  StyleSheet.create({

});

