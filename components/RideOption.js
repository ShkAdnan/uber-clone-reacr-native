import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from 'twrnc';
import { selectTravelTimeInformation } from "../slices/navSlices";


const data = [{
    id : 'abc-12e3',
    title : 'UberX',
    multipler : 1,
    image : "https://links.papareact.com/3pn"
    },
    {
        id : 'abc-12e4',
        title : 'Uber XL',
        multipler : 1.52,
        image : "https://links.papareact.com/5w8"
    },
    {
        id : 'abc-12e5',
        title : 'Uber LUX',
        multipler : 1.75,
        image : "https://links.papareact.com/7pf"
    },
]

const SURGE_RATE_CHARGES = 1.5;

const RideOption = () => {
    const navigation = useNavigation();
    const [selected, setSelected ] = useState(null); 
    const travelTimeInformation = useSelector( selectTravelTimeInformation )

    return (
       <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('NavigateCard') }
            style={tw`absolute top-4 left-5 z-50 p-3 rounded-full`}>
                <Icon name="chevron-left" type='font-awesome' size={14} />
            </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
        </View>
        <FlatList 
         data={data}
         keyExtractor={(item) => item.id}
         style={tw`h-0`}
         renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${ item.id === selected?.id && "bg-gray-200"}`}>
                <Image
                    style={{
                        width : 100,
                        height : 100,
                        resizeMode : 'contain' 
                    }}
                    source={{uri : item.image}}
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{ item.title }</Text>
                    <Text>{ travelTimeInformation?.duration.text} Travel Time</Text>
                </View>
                <Text style={tw`text-lg`}>{
                    Math.round( ( travelTimeInformation?.duration.value * SURGE_RATE_CHARGES * item.multipler ) / 10 )
                } RS.</Text>
            </TouchableOpacity>
         )}
        />
        <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-2 ${ !selected && 'bg-gray-200'}`}>
                <Text style={tw`text-center text-white text-xl`}>Choose { selected?.title }</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default RideOption;