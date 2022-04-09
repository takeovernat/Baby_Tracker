import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Image, Switch, TextInput, currency, SafeAreaView } from "react-native";
import Navstack from "../navigation";
import FlatButton from "../styles/button";
import { Dimensions, Linking } from "react-native";
import fonts from "../styles/fonts";
import emailjs from "emailjs-com";
import axios from 'axios';
import AuthContext from '../context';
import md5 from 'md5'


const forgetpass = ({ navigation }) => {

    axios.get('http://localhost:3000/Admin/forgot')
    .then((response) => {
        console.log(response.data);
    })

     
   

    return (
        <SafeAreaView style={styles.container}>
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
            </View>
            <Button color="black" title="Sign Up" onPress={() => (
                navigation.navigate('signup')
            )} />
        </SafeAreaView>
    );
}


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

    text: {
        fontFamily: 'Noteworthy',
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 70,
        marginTop: 100,
        color: "black"
    },
    textInput: {
        borderRadius: 0,
        borderWidth: 0,
        borderColor: 'black',
        color: 'black',
        marginTop: -5,
        padding: 18,
        width: '75%',
        backgroundColor: "#406882"
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginTop: -20
    },
    note: {
        fontFamily: 'Noteworthy',
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },

    signup: {
        marginTop: 180,
    },
})


export default forgetpass;