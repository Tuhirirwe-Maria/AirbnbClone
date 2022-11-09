import React, { useState } from "react";
import {View, Text, FlatList, TextInput} from 'react-native'
import styles from "./styles";
import search from "../../../assets/data/search";
import Entypo from 'react-native-vector-icons/Entypo';

const LocationSearch = () => {

    const [inputText, setInputText] = useState("")

    return(
        <View style = {styles.container}>
     {/* Input Component */}
     <TextInput
     style = {styles.textInput}
     placeholder = "Where are you going? "
     value={inputText}
     onChangeText = {setInputText}
     />


     {/* List of locations */}
     <FlatList
     data={search}
     renderItem={({item}) => 
     <View style = {styles.row}>
        <View style = {styles.iconContainer}>
        <Entypo name={"location-pin" }size={25} color={'black'} />
        </View>
     <Text styles = {styles.locationText}>{item.description}</Text>
    </View>
    }
     />
        </View>
    ) 
}
 
export default LocationSearch