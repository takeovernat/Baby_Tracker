import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SignInScreen from '../screens/mighthaveusefulcode';
import AuthContext from '../context';
import SettingsScreen from '../screens/settings';
import FlatButton from '../styles/button';
import ChildrenScreen from '../screens/children';
import Dashboard from '../screens/Dashboard'



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return(
    
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: 'black',
        width: 300,
        initialRouteName:"Dashboard",
      },
      headerTintColor:'black'
      
    }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{
           headerStyle:{backgroundColor:"#6E9887"} ,
           title: 'Dashboard',
           drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                 name="view-dashboard"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }} />
      <Drawer.Screen name = "Children" component={ChildrenScreen}
        options={{ headerStyle:{backgroundColor:"#6E9887"},
        title:"children",            
        drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                 name="account-child"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
           }} />
      
     
    </Drawer.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
function MainNav() {
  return (
    
      <Tab.Navigator initialRouteName="Home"
      barStyle={{backgroundColor:'#FFDEFA'}}
      inactiveColor='black'
      labeled={false}
      activeColor='black'
      barStyle={{backgroundColor:'black'}}
      >
      <Tab.Screen name="DashBoard" component={MyDrawer}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-dashboard" color="#EDBFB7" size={24} />
            ),
          }}
        />
      <Tab.Screen name = "children" component={ChildrenScreen}
      options={{
        tabBarLabel: 'notification',
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="bell" size={24} color="#EDBFB7" />        ),
      }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-settings" size={24} color="#EDBFB7" />
        ),
      }}
      />
        
      </Tab.Navigator>
    
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 70,
      backgroundColor: '#EDBFB7',
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
  image: {
      height: 200, 
      width: 100,
      aspectRatio: .8,
},
  text:{
      fontFamily: 'Noteworthy',
      fontSize: 35,
      justifyContent: 'center',
      fontWeight: "bold",
      paddingVertical: 20
  }, 
  button: {
    borderWidth: 0,
    width: '40%',
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FFDEFA'
},
});

export {MainNav};