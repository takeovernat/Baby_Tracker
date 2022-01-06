import FlatButton from "../styles/button";
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from "../styles/colors";

import AuthContext from '../context';
const SettingsScreen = () =>{
const { signOut } = React.useContext(AuthContext);
return(
    <View style={styles.container}>
        
        <Text>Settings</Text>
        
        <View style={{marginTop: 50}}>
         
        <FlatButton text='General'/>
        <FlatButton text='signout' onPress={signOut}/>
        </View>
    </View>
    );
};
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: Colors.seconary,
        justifyContent: 'space-between',
        alignItems: "center",
    },
    settings:
    {
        paddingTop: 30,
        backgroundColor: '#f5b0d4',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    image: {
        height: 300, 
        width: 100,
        aspectRatio: .8,
  },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 47,
        justifyContent: 'center',
        fontWeight: "bold",
        marginTop: 20,
    }, 
    note:{
      fontFamily: 'Noteworthy',
      fontSize: 23,
      fontWeight: "bold",
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 20
  },
});

export default SettingsScreen