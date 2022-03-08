import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Image, Switch, TextInput, currency,SafeAreaView } from "react-native";
import Navstack from "../navigation";
import FlatButton from "../styles/button";
import { Dimensions, Linking } from "react-native";
import fonts from "../styles/fonts";



const confirm = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
                <Text style={styles.text}>HealthyBabies©</Text>
                    <Text style={styles.note}>Please enter your the code that was sent to your email</Text>
                <TextInput
                        //value={username}
                        placeholder = 'Code'
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(user) => setUsername(user.trim())}
                        selectionColor="#1A374D"
                    />
                <View style={styles.textInputContainer}>
                            <FlatButton style={{marginBottom:100}} text='Confrim' onPress={()=> {
                                }}/>
                </View>
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
      marginTop: -150,
      padding: 18,
      width: '75%',
      backgroundColor:"#406882"
  },
  textInputContainer: {
      width: Dimensions.get('window').width,
      alignItems: 'center',
      marginTop: 50
  },
  note:{
      fontFamily: 'Noteworthy',
      fontSize: 20,
      fontWeight: "bold",
      color:"black"
  },

  signup: {
      marginTop: 180,
  },
})


export default confirm;