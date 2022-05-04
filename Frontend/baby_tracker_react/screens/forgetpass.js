import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Image, Switch, TextInput, currency, SafeAreaView,ScrollView,TouchableOpacity,Alert, } from "react-native";
import Navstack from "../navigation";
import FlatButton from "../styles/button";
import { Dimensions, Linking } from "react-native";
import fonts from "../styles/fonts";
import emailjs from "emailjs-com";
import axios from 'axios';
import AuthContext from '../context';
import md5 from 'md5'


const bckImage = {uri:"https://www.xtrafondos.com/wallpapers/vertical/baby-yoda-el-mandaloriano-4240.jpg"}
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const forgetpass = ({ navigation }) => {

    axios.get('http://localhost:3000/Admin/forgot')
    .then((response) => {
        console.log(response.data);
    })

     
   

    return (
        <ScrollView style={styles.container}>
            
            <Text style={styles.text}>HealthyBabies©</Text>
            <Text style={styles.note}>Please enter your email to reset your password</Text>

            <TextInput
                type="email"
                placeholder='Email'
                placeholderTextColor="black"
                placeholderTextFont="Noteworthy"
                style={styles.textInput}
                autoCapitalize='none'
                name="user_email"
                selectionColor="#1A374D"
            />
            <View style={styles.textInputContainer}>
                <FlatButton style={{ marginBottom: 100 }} type="submit" text='Recover' onPress={() => {
                    forgetpass + navigation.navigate('ConfirmCode')
                }} />
            </View>
            <View style={styles.signup}>
                    <Text style={styles.note}>Don't have an account?</Text>
                    <FlatButton style={styles.forgot}  text="Sign Up" onPress={()=> (
                        navigation.navigate('signup')
                    )}/>
                </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(51,64,83,255)',
        paddingBottom: 40
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
        marginTop: '2%',
        padding: 15,
        width: '75%',
        backgroundColor:"rgba(71, 122, 151, .9)"
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginTop: '-15%',
    },

    formBottoms: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginTop: 125
    },
    login: {
        color:"white",
        marginTop: 50,
    },
    forgot:{
        color:"white",
        width:"45%",
        marginBottom: 15,
        marginHorizontal:100,
    },
    note:{
        fontFamily: 'Noteworthy',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        color:"white",
    },
    signup: {
        alignItems: 'center',
        marginTop: "20%",
    },

});


export default forgetpass;