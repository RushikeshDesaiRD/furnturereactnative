import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from './constants/theme';
import Home from './screens/Home';
import ItemDetail from './screens/ItemDetail';

const Stack = createStackNavigator()
const theme = {
  ...DefaultTheme,
  colors:{
    border:"transparent",
    ...DefaultTheme.colors
  }
}

export default function App() {
  return (
   <>
   {/* <StatusBar backgroundColor={"white"} translucent={true} hidden={false} barStyle="light-content"/> */}
   <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {"white"} translucent = {true}/>
   <NavigationContainer>
   <Stack.Navigator theme={theme}
   initialRouteName={"Home"}
   screenOptions={{
     headerShown:false
   }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
   </Stack.Navigator>
   </NavigationContainer>
   
   </>
  )
}
