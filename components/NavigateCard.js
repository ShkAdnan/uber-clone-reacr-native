import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from "react-native-elements";
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlices";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
    
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
       <SafeAreaView style={tw`bg-white flex-1`}>
           <Text style={tw`text-center py-5 text-xl`}>
                Good Morning ! Adnan
            </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                <GooglePlacesAutocomplete 
                    placeholder='Where to?'
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400} 
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    returnKeyType={"search"}
                    minLength={2}
                    query={{
                        key : GOOGLE_MAP_API_KEY,
                        language : 'en'
                    }}
                    onPress={( data , details = null )=>{
                        dispatch(setDestination({
                            location : details.geometry.location,
                            desription : data.description
                        }))

                        navigation.navigate('RideOption');
                    }}
                />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        paddingTop : 20,
        flex : 0
    },
    textInput : {
        backgroundColor : "#DDDDDF",
        borderRadius : 0,
        fontSize : 18
    },
    textInputContainer : {
        paddingHorizontal : 20,
        paddingBottom : 0
    }
})