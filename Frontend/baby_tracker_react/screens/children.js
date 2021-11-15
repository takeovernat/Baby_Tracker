import FlatButton from "../styles/button";
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const ChildrenScreen = () => (
      <View style={styles.container}>
      <Text style={{marginTop:10}}> "notification"</Text>
      </View>
    );
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#EDBFB7',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        height: 300, 
        width: 100,
        aspectRatio: .8,
        //resizeMode: 'contain',
  },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 47,
        justifyContent: 'center',
        fontWeight: "bold",
        marginTop: 20
    }, 
    note:{
      fontFamily: 'Noteworthy',
      fontSize: 23,
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 20
  },
});

export default ChildrenScreen