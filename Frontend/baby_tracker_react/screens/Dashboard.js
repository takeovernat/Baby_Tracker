import React, { useContext } from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FlatButton from '../styles/button';

import AuthContext from '../context';


function HomeScreen(props) {
    const username = props.route.params.username
    //console.log(props.route.params.username);
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
             <Text>Home</Text>
             <Text>hello {username}</Text>
            <FlatButton text="Sign out" onPress={signOut} />
        </View>
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
  
  export default HomeScreen

