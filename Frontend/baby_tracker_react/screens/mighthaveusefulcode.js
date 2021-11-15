
import React, {useEffect, useState} from "react";

//import Navstack from "../navigation";
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
import { MainNav } from "../navigation/MainNav";

import axios from 'axios';


const SignInScreen = ({navigation}) => {

    useEffect(() => {
       // console.log(Auth);
       
       // (Auth === true) ? console.log("true from signin") : console.log("false from signin");
        
    });
    
    

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
const [Users, setUsers] = useState([]);
const [isValidLogin, setisValidLogin] = useState(false);

useEffect(()=> {
    getUsers();
    }, []);

const getUsers = () => {
    axios 
        .get('http://127.0.0.1:3003/')
        .then((res)=> {
            setUsers(res.data);
            //console.log(res.data);
        })
        .catch((err) => console.log(err));
};

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
    /*
const Login = (username, password) => {

    if ( username.length == 0 || password.length == 0 ) {
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

    Users.forEach((user) => {        
    if(user.username === username && user.password === password){
        setisValidLogin(true);
    //console.log(user.username);
    }
    });
    if(isValidLogin){
        console.log("youd nav here or sum");
        

    }
    else{
        alert('Invalid login');
    }
};
*/
    const loginHandle = (userName, password) => {
        
        //console.log("-----> ", Users.length)
       const foundUser = async () =>{
            for(let i = 0; i<Users.length; i++){
                
               if (Users[i].username === userName && Users[i].password === password){
                   //console.log("found it and it is -> ", Users[i].username);
                   //return Users[i].username;
                    navigation.navigate("options", {
                        screen: 'DashBoard',
                        params: {}
                    });
               }
               
            }
       }
            //console.log(item.username, item.password, " ", userName, " ", password);
            //return userName == item.username && password == item.password;

        const UserInfo = foundUser();
        //const user_username = UserInfo[0];
        //const user_password = UserInfo[1];
       //console.log(UserInfo[0]);
        
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
                                <TouchableOpacity style={styles.button} onPress={loginHandle("ron", "123444")}>
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
        backgroundColor: '#f5b0d4',
        //margin: 10
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