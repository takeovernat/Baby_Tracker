import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SignInScreen from '../screens/signin';
import AuthContext from '../context';
import SettingsScreen from '../screens/settings';
import FlatButton from '../styles/button';
import ChildrenScreen from '../screens/children';

function HomeScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  return (
      <View style={styles.container}>
          <FlatButton text="Sign out" onPress={signOut} />
      </View>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={HomeScreen} />
      <Drawer.Screen name = "Children" component={ChildrenScreen}/>
      <Drawer.Screen name = "Logout" component={ChildrenScreen}/>

    </Drawer.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
function MainNav() {
  return (
    
      <Tab.Navigator initialRouteName="Home"
      barStyle={{backgroundColor:'#FFDEFA'}}
      inactiveColor='black'
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
const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 70,
      backgroundColor: '#f5b0d4',
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