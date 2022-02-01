import React, { useState, useEffect } from "react";
import {ImageBackground, StyleSheet, Text, View, Button, Image, Switch } from "react-native";
import Navstack from "../navigation";
import FlatButton from "../styles/button";
import { Dimensions, Linking } from "react-native";
import fonts from "../styles/fonts";
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
    console.log("toggled")
   
}, [isDark])
  console.log(navigation);
  
  return (
    <View>
        <ImageBackground source={image} resizeMode="cover" style={{flex:1, height:windowHeight, opacity:1}}>
        </ImageBackground>
      {/* <Image
        style={styles.image}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/941/941515.png",
        }}
      /> */}
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
        any questions?
        </Text>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#EDBFB7",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerDark:{
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "flex-start",
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
    fontSize: 40,
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: 200,
    opacity:3,
    paddingLeft:60,
    paddingRight:60,
    color:"black",
    alignItems:"center"
  },
  note: {
    fontFamily: "Noteworthy",
    fontSize: 20,
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 20,
    opacity:1,
    color:"black",
    paddingLeft: 60,
    paddingRight: 60,
    alignItems:"center"
  },
  button:{
      marginTop:100,
      paddingLeft:40,
      paddingRight:40,
      alignItems:"center"
  },
  link:{
      marginTop:280,
      color: "black",
      fontSize:30,
      fontFamily:fonts.primary,
      alignContent: "center",
      justifyContent: "center"
  }
});

export default welcomescreen;
