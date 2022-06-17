import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity , FlatList} from 'react-native';
import { Icon } from "react-native-elements";
import tw from 'twrnc';

const data = [{
            id : '1234',
            icon : 'home',
            location : 'Home',
            destination : 'Kariem Town, Faisalabad'
        },{
            id : '1235',
            icon : 'briefcase',
            location : 'Office',
            destination : 'Kohinoor One, Faisalabad'
        }]
const NavFav = () => {
    
    return (
      <FlatList data={data} keyExtractor={ (item) => item.id }
      ItemSeparatorComponent={() => <View style={tw`bg-gray-200`} /> }
      renderItem={({item}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={item.icon}
                type='ionicon'
                color='white'
                size={18}
            /> 
            <View>
                <Text style={tw`font-semibold text-lg`}>{ item.location }</Text>
                <Text style={tw`text-gray-500`}>{ item.destination }</Text>
            </View>
        </TouchableOpacity>
    )}/>
      

    )
}

export default NavFav;