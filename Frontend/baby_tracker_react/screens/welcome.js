import React, { useState, useEffect } from "react";
import {ImageBackground, StyleSheet, Text, View, Button, Image, Switch } from "react-native";
import Navstack from "../navigation";
import FlatButton from "../styles/button";
import { Dimensions, Linking } from "react-native";
import fonts from "../styles/fonts";
import { ScrollView } from "react-native-gesture-handler";
const welcomescreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDark, setDark] = useState(false)
  const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
     
  }
  const image = {uri:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2020%2F05%2F07%2FMagnolia-Bath-Time-2000.jpg"}
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    //console.log("toggled")
   
}, [isDark])
  //console.log(navigation);
  
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={{flex:1, height:windowHeight, opacity:1}}>
        </ImageBackground>
      <ScrollView>
      <Text style={styles.text}>HealthyBabies©</Text>
      <Text style={styles.note}>
        An interactive way to keep track of your children's health. Click continue
        to get started
      </Text>
      <View style={styles.button}>
      <Button
        title="Continue"
        color="black"
        onPress={() => navigation.navigate("SignIn")}
      />
      </View>
      
      <View style={{alignItems:"center"}}>
      <Text style={styles.link}
      onPress={() => Linking.openURL('http://google.com')}>
        Any Questions?
        </Text>
      </View>
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'rgba(51,64,83,255)',
    paddingBottom: 40
  },
  image: {
    height: 300,
    width: 100,
    aspectRatio: 0.8,
    resizeMode: "contain",
    marginTop: 60,
  },
  text: {
    fontFamily: "Noteworthy",
    fontSize: 37,
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: 50,
    opacity:3,
    paddingLeft:60,
    paddingRight:60,
    color:"black",
    alignItems:"center",
    marginBottom: 10,
  },
  note: {
    fontFamily: "Noteworthy",
    fontSize: 20,
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 20,
    opacity:1,
    color:'rgb(10, 10, 10)',
    marginTop: 400,
    marginLeft: 20,
    marginRight: 20,
    alignItems:"center",
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'rgba(158, 150, 150, .4)' ,
  },
  button:{
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'rgb(71, 122, 151)',
    borderStyle: 'solid',
    backgroundColor: 'rgba(71, 122, 151, .8)' ,
    marginTop:10,
    marginHorizontal: 160,
    alignItems:"center"
  },
  link:{
      marginTop:125,
      color: "black",
      fontSize:20,
      fontFamily:fonts.primary,
      alignContent: "center",
      justifyContent: "center"
  }
});

export default welcomescreen;
