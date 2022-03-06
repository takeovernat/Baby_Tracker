import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Image, Switch, TextInput, currency,SafeAreaView } from "react-native";
import Navstack from "../navigation";
import FlatButton from "../styles/button";
import { Dimensions, Linking } from "react-native";
import fonts from "../styles/fonts";



const forgetpass = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
                <Text style={styles.text}>HealthyBabies©</Text>
                
                
                <View style={styles.signup}>
                    <Text style={styles.note}>Don't have an account?</Text>
                </View>
                <Button color="black"title="Sign Up" onPress={()=> (
                        navigation.navigate('signup')
                    )}/>
            </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  btnSignupContainer: {
      alignItems: 'center'
  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1A374D',
      //margin: 10
  },
  image: {
      height: 100, 
      width: 75,
      aspectRatio: .9,
      marginTop: -10,
      marginBottom: 40 
      //resizeMode: 'contain',
},
  text:{
      fontFamily: 'Noteworthy',
      fontSize: 30,
      fontWeight: "bold",
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 70,
      marginTop:100,
      color: "black"
  },
  textInput: {
      borderRadius: 0,
      borderWidth: 0,
      borderColor: 'black',
      color: 'black',
      marginTop: 5,
      padding: 18,
      width: '75%',
      backgroundColor:"#406882"
  },
  textInputContainer: {
      width: Dimensions.get('window').width,
      alignItems: 'center',
      marginTop: 15
  },
  note:{
      fontFamily: 'Noteworthy',
      fontSize: 20,
      fontWeight: "bold",
      color:"black"
  },
  forgot:{
      justifyContent:"flex-start",
  },
  signup: {
      marginTop: 180,
  },
})


export default forgetpass;