import React from 'react';
import {StatusBar,} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'
import feed from './assets/data/feed';
import SearchResults from './src/screens/SearchResults';
import LocationSearch from './src/screens/LocationSearch';
import Guests from './src/screens/Guests';
import Router from './src/navigation/Router';


const post1 = feed[0];
const post2 = feed[1]
const App = () =>{
  return(
   <>
   <StatusBar barStyle="default" />
   <Router/>
   </>
  )
}


export default App;
