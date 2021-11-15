import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions} from 'react-native';
import Navstack from "../navigation";
import FlatButton from '../styles/button';
import AuthContext from '../context';

const forms = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome New User</Text>
            <TextInput
                        placeholder="Name"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                    />
            <TextInput
                        placeholder="Username"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
            />
            <TextInput
                        placeholder="Email"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
            />
            <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
            />
            <TextInput
                        placeholder="Retype Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
            />
            <View style={{marginTop:20}}>
                        <FlatButton  text="Sign Up"/>
            </View>
            
            <Text style={styles.note}>have an account?</Text>
            <FlatButton text="login" onPress={()=> (
                navigation.pop()
            )}/>
                

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        backgroundColor: '#EDBFB7',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 35,
        justifyContent: 'center',
        fontWeight: "bold",
        paddingVertical: 40,
        marginTop: 25
    }, 
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
        marginTop: 10,
        padding: 18,
        width: '75%'
    },
    note:{
        fontFamily: 'Noteworthy',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 120
    },

});
export default forms