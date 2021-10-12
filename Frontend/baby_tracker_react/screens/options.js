import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Navstack from "../navigation";
import FlatButton from '../styles/button';

const options = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri:'https://cdn-icons-png.flaticon.com/512/941/941515.png'}}
            />
            <Text style={styles.text}>New User?</Text>
            <FlatButton text='Sign Up' onPress={() =>
                navigation.navigate('welcome')
                }/>
            <Text style={styles.text}>Already a User?</Text>
            <FlatButton text='Sign In' onPress={() =>
                navigation.navigate('login')
                }/>
        </View>
    )
};

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

export default options;