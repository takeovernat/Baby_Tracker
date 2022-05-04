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
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../styles/colors';
import Notification from '../screens/notification';


const usernamepass = "";
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  const username = props.route.params
  //console.log("from drawer- ",props.route)
  return(
    
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: 'black',
        width: 300,
        initialRouteName:"Dashboard",
        
      },
      headerTintColor:'white',
      
      
    }}>
      <Drawer.Screen name="Dashboard" initialParams={username} component={Dashboard} options={{
           
           headerStyle:{backgroundColor:"black", shadowColor: "transparent" } ,
           title: '',
           drawerLabel: "Home",
           drawerLabelStyle:{
             color:"white"
           },
          // drawerType: "slide",
          drawerHideStatusBarOnOpen: true,
          //drawerActiveTintColor: "red",
           //drawerInactiveBackgroundColor: "black",
           drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                 name="view-dashboard"
                 size={size}
                 color={focused ? "white" : Colors.primary}
              />
           ),
        }} />
      <Drawer.Screen name = "notifications" component={Notification}
        options={{ headerStyle:{backgroundColor:"black", shadowColor: "transparent"},
        title:"Notifications",
        drawerLabelStyle:{ 
          color: "white"
        },
        drawerLabel: "Notification",       
        drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                 name="bell"
                 size={size}
                 color={focused ? "white" : Colors.primary}
              />
           ),
           }} />
    </Drawer.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
function MainNav(props) {
  
  const username = props.route.params;
  //console.log(garbage)
  //console.log("fron maonnav->", username)
  return (
    
      <Tab.Navigator initialRouteName="Home"
      inactiveColor={Colors.primary} 
      labeled={true}
      activeColor="blue"
      barStyle={{backgroundColor:'rgba(255, 255, 255, .8)'}}
      >
      <Tab.Screen name="DashBoard" component={MyDrawer}
          initialParams={username}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-dashboard" color={color} size={24} />
            ),
          }}
        />
      <Tab.Screen name = "children" component={ChildrenScreen}
      initialParams={username}
      options={{
        tabBarLabel: 'children',
        tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account-child" size={24} color={color} />        ),
      }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-settings" size={24} color={color} />
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

