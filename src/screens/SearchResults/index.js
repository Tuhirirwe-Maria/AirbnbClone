import React from "react";
import {View, Text, FlatList} from 'react-native'
import Post from "../../components/Post";
import feed from "../../../assets/data/feed";

const SearchResults = () => {

    return(
        <View >
         <FlatList
         data={feed}
         renderItem= {({item}) => <Post post = {item}/>}
         />
        </View>
    )
}
 
export default SearchResults