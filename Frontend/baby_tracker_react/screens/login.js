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

const bcrypt = require('bcryptjs')
export default function SignUpScreen({navigation}){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [users, setUsers] = React.useState([]);
    const { signIn } = React.useContext(AuthContext);
    
    React.useEffect(() => {
         getUsers();
         //console.log(users)
     }, []);

    const getUsers = async () => {
    axios
      .get('http://localhost:3003/users')
      .then((res)=> {
          setUsers(res.data);
          //console.log(res.data);
      })
      .catch((err) => console.log(err));
    };


    const login = async (username, password) => {
        if(username.length === 0 || password.length === 0){
               Alert.alert('Invalid entry!', 'Username or password cannot be empty.', [
                    {text: 'Okay'}
                  ]);
                  return;
                  }
                //   console.log(bcrypt)
                //   var salt = bcrypt.genSaltSync(10);
                //   var hash = bcrypt.hashSync("aaaa", salt);
                //   console.log("password: " + password + "hash: " + hash)
        
        try{
        users.forEach((user) => {

            if (user.username === username && user.password === password) {
                signIn(username, password)
                throw BreakException
 
            }
        });
        }
        catch(e){
            if(e!=BreakException) throw e;
        }

        Alert.alert('Invalid entry!', 'Username or password is wrong.', [
            {text: 'Okay'}
          ]);
        
      
    };

    
  
    return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>HealthyBabies©</Text>
                
                <View style={styles.open}></View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        //value={username}
                        placeholder = 'username'
                        placeholderTextColor="white"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(user) => setUsername(user.trim())}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass) => setPassword(pass.trim()) }
                    />

                    <View>
                        <View style={styles.textInputContainer}>
                            <FlatButton style={{marginBottom:100}} text='Login' onPress={()=> {
                                login(username, password)}}/>
                        </View>
                    </View>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.note}>Don't have an account?</Text>
                </View>
                <FlatButton style={{}}  text="Sign Up" onPress={()=> (
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
        fontSize: 37,
        fontWeight: "bold",
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 70,
        marginTop:200,
        color: "white"
    },
    textInput: {
        borderRadius: 0,
        borderWidth: 0,
        borderColor: 'black',
        color: 'black',
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
    
    signup: {
        marginTop: 180,
    },

});