import * as React from 'react';
import { 
    Button,
    ScrollView,
    SafeAreaView,
    View, 
    Text, 
    Image,
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNav } from '../navigation/MainNav';
import Navstack from '../navigation';
import AuthContext from '../context';
import FlatButton from '../styles/button';
import md5 from 'md5'

export default function SignUpScreen({navigation}){
    const [username, setUsername] = React.useState(''); //holds username
    const [password, setPassword] = React.useState(''); //holds password
    const [users, setUsers] = React.useState([]); //holds all admins from axios request
    const { signIn } = React.useContext(AuthContext); //usecontext forch signing in user
    //const [passwordhash, setPasswordHash] = React.useState('');
    //use effect makes sure the func inside is executed as soon as the page is rendered
    React.useEffect(() => {
         getUsers();
         //console.log(users)
     }, []);

     // the get users function above
    const getUsers = async () => {
        let passer="";
    axios
      .get('http://localhost:3000/Admin')
      .then((res)=> {
          setUsers(res.data);
      })
      .catch((err) => console.log(err));
    };
    
//login function // authenticates user easy to understand
    const login = async (username) => {

        
        if(username.length === 0 || password.length === 0){
               Alert.alert('Invalid entry!', 'Username or password cannot be empty.', [
                    {text: 'Okay'}
                  ]);
                  return;
                  }
        else if (username.length < 5){
            Alert.alert('Invalid entry!', 'Username must be atleast 6 characters.', [
                {text: 'Okay'}
              ]);
              return;
        }
        try{
            var found = false;
            let passer='';
            users.forEach((user) => {
                
                if (user.username === username) {
                    found= true;
                    user.password.data.map ( (one) => {
                              passer += (String.fromCharCode(one))
                            //console.log(String.fromCharCode(one))
                        
                          })
                        //   console.log(passer.length)
                        //   console.log(md5(password).length)
                        if(md5(password) === passer){
                         console.log("passwords match")
                         signIn(username, password)
                        } 
                        else{
                            Alert.alert('Invalid entry!', 'Username or password is wrong.', [
                                {text: 'Okay'}
                              ]);
                            //console.log("no match")
                        }
     
                }
                
            });
            }
            catch(e){
                console.log(e);
            }
            if(!found){
                Alert.alert('Invalid entry!', 'Username or password is wrong.', [
                    {text: 'Okay'}
                  ]);
            }
            
        
    };
    //what the page actually returns visible
    return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>HealthyBabies©</Text>
                
                <View style={styles.open}></View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        //value={username}
                        placeholder = 'username'
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(user) => setUsername(user.trim())}
                        selectionColor="#1A374D"
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass) => setPassword(pass.trim()) }
                        selectionColor="#1A374D"
                    />

                    <View>   
                        <View style={styles.textInputContainer}>
                            <FlatButton style={{marginBottom:100}} text='Login' onPress={()=> {
                                login(username, password)}}/>
                            <Button style={styles.forgot}  color="white" title="Forgot password?" onPress={()=> (
                            navigation.navigate('signup') )}/>
                        </View>
                        <View>

                    </View>
                    </View>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.note}>Don't have an account?</Text>
                </View>
                <FlatButton text="Sign Up" onPress={()=> (
                        navigation.navigate('signup')
                    )}/>
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
        color: "white"
    },
    textInput: {
        borderRadius: 0,
        borderWidth: 0,
        borderColor: 'black',
        color: 'white',
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
        color:"white"
    },
    forgot:{
        justifyContent:"flex-start",
    },
    signup: {
        marginTop: 180,
    },

});