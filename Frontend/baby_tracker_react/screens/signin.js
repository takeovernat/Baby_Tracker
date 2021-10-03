/*
import React, {useState} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import Navstack from "../navigation";


const ProfileScreen = ({ navigation, route }) => {
    route.params.changestate("false")
     return (<Text>This iss {route.params.name}'s profile and state is {route.params.state}</Text>);
   };
   

   export default ProfileScreen;
   */

   import React,{useState} from 'react';
import { 
    Button,
    ScrollView,
    SafeAreaView,
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

//import { AuthContext } from '../components/context';

//import Users from '../model/users';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    //const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {
        /*
        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
        */
       
    }

    //const [username, setUsername] = useState('');
    //const [pass, setpass] = useState('');

    return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.open}></View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            //value={username}
                            placeholder="username"
                            placeholderTextColor="grey"
                            style={styles.textInput}
                            onChangeText={(text) => textInputChange(text)}
                        />
                        <TextInput
                            placeholder="password"
                            placeholderTextColor="grey"
                            secureTextEntry={true}
                            style={styles.textInput}
                            //value={pass}
                            onChangeText={(pass) => handlePasswordChange(pass) }
                        />
    
                        <View>
                            <View style={styles.textInputContainer}>
                                <TouchableOpacity style={styles.button} onPress={console.log("")}>
                                    <Text>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.signup}>
                        <Text style={styles.txtHello}>Don't have an account?</Text>
                        <Button title="Sign Up" />
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
};

export default SignInScreen;

const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        color: 'grey',
        marginTop: 5,
        padding: 18,
        width: '75%'
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    txtHello: {
        marginTop: 30,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    box: {
        width: 300,
        height: 150,
        marginTop: 10,
        backgroundColor: 'white',
        width: '105%'
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
    image: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: 300
    },
    signup: {
        marginTop: 200
    },
    open: {
        marginTop: 200
    }
});