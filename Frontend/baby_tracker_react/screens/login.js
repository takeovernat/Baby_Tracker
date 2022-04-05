import * as React from 'react';
import { 
    Button,
    ImageBackground,
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
    const bckImage = {uri:"https://www.xtrafondos.com/wallpapers/vertical/baby-yoda-el-mandaloriano-4240.jpg"}
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    //const [passwordhash, setPasswordHash] = React.useState('');
    //use effect makes sure the func inside is executed as soon as the page is rendered
    React.useEffect(() => {
         getUsers();
         //console.log(users)
     }, []);

     // the get users function above
    const getUsers = async () => {
        let passer="";
        
        // const results = (await fetch('http://localhost:3000/Admin')).json
        // console.log(results)
    
        axios
      .get('http://10.0.2.2:3000/Admin')
      .then((res)=> {
          setUsers(res.data);
          
      })
      .catch((err) => console.log("There was an error retrirving admins for log in purposes!", err));
  


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
                          
                          if(md5(password) === passer){
                              console.log(`Autherized ${username}`)       
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
                <ImageBackground source={bckImage} resizeMode="cover" style={{flex:1, height:windowHeight, opacity:1}}>
                </ImageBackground>
                <Text style={styles.text}>HealthyBabies©</Text>
                
                <View style={styles.open}></View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        //value={username}
                        placeholder = 'Username'
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(user) => setUsername(user.trim())}
                        selectionColor="#1A374D"
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass) => setPassword(pass.trim()) }
                        selectionColor="#1A374D"
                    />

                    <View>   
                        <View style={styles.formBottoms}>
                            <FlatButton style={styles.login} text='Login' onPress={()=> {
                                login(username, password)}}/>
                            <FlatButton style={styles.forgot}  text="Forgot password?" onPress={()=> (
                            navigation.navigate('ResetPassword') )}/>

                        </View>
                        <View>

                    </View>
                    </View>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.note}>Don't have an account?</Text>
                    <FlatButton style={styles.forgot}  text="Sign Up" onPress={()=> (
                        navigation.navigate('signup')
                    )}/>
                </View>
            </SafeAreaView>
        
    );
  }

  const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        justifyContent: 'space-between',
        backgroundColor: 'rgba(51,64,83,255)',
        paddingBottom: 150
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
        marginTop: 120
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