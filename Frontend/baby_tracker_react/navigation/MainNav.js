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
      headerTintColor:'black'
      
    }}>
      <Drawer.Screen name="Dashboard" initialParams={username} component={Dashboard} options={{
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
      <Drawer.Screen name = "notifications" component={SettingsScreen}
        options={{ headerStyle:{backgroundColor:"#6E9887"},
        title:"notifications",            
        drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                 name="bell"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
           }} />
        {/* //TODO: fix this to actually show the statistics screen on the sidebar. */}
{/* //      <Drawer.Screen name = "Stats" component={Statistics}
//        options={{ headerStyle:{backgroundColor:"#6E9887"},
//        title:"Stats",
//        drawerIcon: ({focused, size}) => (
//              <MaterialCommunityIcons
//                name="chart-box-outline" //[^1]
//                size={size}
//                color={focused ? '#7cc' : '#ccc'}
//              />
//           ),
//           }} />
        //[^1]: May want to change this icon. Some other options chart-box, chart-box-plus-outline,
        //      chart-histogram, chart-line, chart-pie, chart-timeline, chart-scatter-plot.
        //      More examples: https://materialdesignicons.com/tag/math
      
      */}
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
      inactiveColor='#EDBFB7'
      labeled={true}
      activeColor='#6E9887' 
      barStyle={{backgroundColor:'black'}}
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
      initialParams={garbage}
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

const garbage = {
  one:{
    baby_id:0,
    Name: "donald",
    age: 1,
    lastDiaperChange: "1638397371",
    hoursSlept: 8
  }
    ,
  two:{
    baby_id: 1,
    Name: "sarah",
    age: 0.8,
    lastDiaperChange: "1638397354",
    hoursSlept: 5
  }
  
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

