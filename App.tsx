import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs, CardStyleInterpolators ,createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StatusBar, Text, View } from 'react-native';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'musical-notes' : 'musical-notes-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size + (focused ? 5 : 0)} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
      <StatusBar barStyle='dark-content' translucent backgroundColor='transparent'/>
    </NavigationContainer>
  );
}


function HomeScreen(props: any) {
  const { navigation } = props

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to details'
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen(props: any) {
  const { navigation } = props

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}