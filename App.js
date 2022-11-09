/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';
// import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'
import feed from './assets/data/feed';
import SearchResults from './src/screens/SearchResults';
import LocationSearch from './src/screens/LocationSearch';

const post1 = feed[0];
const post2 = feed[1]
const App = () =>{
  return(
    <View>
        {/* <HomeScreen/> */}
        {/* <Post post = {post2 }/> */}
        {/* <SearchResults/> */}
        <LocationSearch/>
    </View>
  )
}


export default App;
