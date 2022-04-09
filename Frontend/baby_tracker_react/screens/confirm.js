import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Image, Switch, TextInput, currency,SafeAreaView,ScrollView } from "react-native";
import Navstack from "../navigation";
import FlatButton from "../styles/button";
import { Dimensions, Linking } from "react-native";
import fonts from "../styles/fonts";






const confirm = ({ navigation }) => {
    const bckImage = {uri:"https://www.xtrafondos.com/wallpapers/vertical/baby-yoda-el-mandaloriano-4240.jpg"}
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>HealthyBabies©</Text>
    <Text style={styles.note}>Please enter the code</Text>

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
                                navigation.navigate('NewPassword')
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
    backgroundColor: 'rgba(51,64,83,255)',
    //margin: 10
},

text:{
    alignItems: 'center',
    fontFamily: 'Noteworthy',
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 90,
    marginTop:50,
    color: "white"
},
  textInput: {
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(71, 122, 151, .5)',
    color: 'white',
    marginTop: '-40%',
    padding: 15,
    width: '75%',
    backgroundColor:"rgba(71, 122, 151, .9)"
},
textInputContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginTop: '0%',
},
formBottoms: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginTop: 125
},
note:{
    fontFamily: 'Noteworthy',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: '-15%',
    color:"white",
},

signup: {
    alignItems: 'center',
    marginTop: "20%",
},
})


export default confirm;