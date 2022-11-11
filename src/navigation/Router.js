import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationSearch from "../screens/LocationSearch";
import GuestsScreen from "../screens/Guests";
import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createNativeStackNavigator();

const Router = () => {

    return(
        <NavigationContainer >
            <Stack.Navigator>
            <Stack.Screen
                 name="Home"
                 component={HomeTabNavigator}
                 options={{
                    headerShown: false
                 }}
                 />
                <Stack.Screen
                 name="Search your destination"
                 component={LocationSearch}
                 />
                 <Stack.Screen
                 name="Guests"
                 component={GuestsScreen}
                 options={{
                    title: "How many people?"
                 }}
                 />
            </Stack.Navigator>
     
        </NavigationContainer>
    )
}
 
export default Router