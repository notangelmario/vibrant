import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme as DefaultThemeNav } from '@react-navigation/native';
import { Button, Provider as PaperProvider, DefaultTheme as DefaultThemeMat } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StatusBar, View } from 'react-native';

import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'

const Tab = createMaterialBottomTabNavigator()


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          shifting
          theme={theme}
          barStyle={{backgroundColor: theme.colors.surface}}
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName: any;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'musical-notes' : 'musical-notes-outline';
                  break;
                case 'Settings':
                  iconName = focused ? 'settings' : 'settings-outline';
                  break;
              }

              return <Ionicons name={iconName} size={24} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
        <StatusBar barStyle='light-content' translucent backgroundColor='#00000025'/>
      </NavigationContainer>
    </PaperProvider>
  );
}

const theme: any = {
  ...DefaultThemeNav,
  ...DefaultThemeMat,
  dark: false,
  roundness: 20,
  colors: {
    ...DefaultThemeNav.colors,
    ...DefaultThemeMat.colors,
    primary: '#48acf0',
    accent: '#61c9a8',
    background: '#212121',
    surface: '#323232',
    text: '#e4e4e4'
  }
}