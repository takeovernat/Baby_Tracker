import React from 'react';
import { Button, View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={navigation.openDrawer}
        title="Open navigation drawer"
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
function SettingsScreen({navigation}){
  return(
    <View style={{margintop:20}}>
    <Text style={{margintop:10}}> "Settings"</Text>
    </View>
  );
}

function ChildrenScreen({navigation}){
  return(
    <View style={{margintop:50}}>
    <Text style={{margintop:10}}> "Childrens"</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={navigation.openDrawer}
        title="Open navigation drawer"
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}


const Drawer = createDrawerNavigator();



function MyDrawer() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="DashBoard" component={HomeScreen} />
      <Drawer.Screen name = "Children" component={HomeScreen}/>
    </Drawer.Navigator>
  );
}

function MainNav() {
  return (
    
      <Tab.Navigator initialRouteName="Home"
      barStyle={{backgroundColor:'#f5b0d4'}}
      inactiveColor='grey'
      >
      <Tab.Screen name="DashBoard" component={MyDrawer}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
            ),
          }}
        />
      <Tab.Screen name = "Children" component={ChildrenScreen}
      options={{
        tabBarLabel: 'Children',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-child" color={color} size={30} />
        ),
      }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-settings-outline" color={color} size={30} />
        ),
      }}
      />
        
      </Tab.Navigator>
    
  );
}

export {MainNav};