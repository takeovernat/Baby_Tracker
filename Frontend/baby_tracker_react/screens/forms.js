import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TextInput, Dimensions} from 'react-native';
import Navstack from "../navigation";
import FlatButton from '../styles/button';
import AuthContext from '../context';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import md5 from 'md5'
import { Alert } from 'react-native';

const forms = ({navigation})=>{
    const [users, setUsers] = React.useState([]); //holds all admins from axios request
    const [username, setUsername] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState("");
    const [passTwo, setPassTwo] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const bckImage = {uri:"https://www.xtrafondos.com/wallpapers/vertical/baby-yoda-el-mandaloriano-4240.jpg"}
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
 
 
    const { signUp } = React.useContext(AuthContext);
    
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

  
    

    const handlePress = () => {
        if (username.length < 3) {
            alert('username must be atleast 3 characters');
            return;
        } else if (pass.length < 6) {
            alert('password must be atleast 6 characters');
            return;
        } else if (pass !== passTwo) {
            alert("passwords don't match");
            return;
        } 
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
        {
            alert("You have entered an invalid email address!")
            return (false)
        }
        else if(name.length < 3 || name === " " || name === "  " || name == "\t"){
            alert("please enter a valid name") 
            return (false)
        }
        else if(phone.length != 10)
        {
            console.log(phone.length)
            alert("please enter a valid phone number")
            return ("false")
        }
        else {
            //
            console.log("*******************")
            let a = true;
            users.forEach((user) => {
               if( user.username == username ){
                   console.log("match")
                a = false;
               } 
            
                
            });
            //console.log("a->",a)
            //if username doesnt exist in database
           if(a){  
            const newUser = {
                first_name: name,
                username: username,
                email: email,
                password: md5(pass.trim()),
                email:email,
                phone: phone
            };
            axios
                .post('http://localhost:3000/admin/', newUser)
                .then((res) => console.log(res.data))
                .catch((err) => console.log( err.response.request._response ));
                
                signUp(username, pass, email)
                }//if
                else{
                    Alert.alert('Username taken!', [
                        {text: 'Okay'}
                    ]);
                }


            }//else
            
    };

    return(
        <View style={styles.container}>
            <ImageBackground source={bckImage} resizeMode="cover" style={{flex:1, height:windowHeight, opacity:1}}>
            </ImageBackground>
            <Text style={styles.text}>HealthyBabies©</Text>
            <Text style={styles.textsub}> Monitor and take control of your children's health now</Text>
            <View style={styles.textInputContainer}>
            <TextInput
                        placeholder="Name"
                        onChangeText={(name) => setname(name.trim())}
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        selectionColor="#1A374D"
                    />
            <TextInput
                        placeholder="Username"
                        onChangeText={(user) => setUsername(user.trim())}
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        selectionColor="#1A374D"
            />
            <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        onChangeText={(phone) => setphone(phone.trim())}
                        selectionColor="#1A374D"
            />
            <TextInput
                        placeholder="Email"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        onChangeText={(email) => setemail(email.trim())}
                        selectionColor="#1A374D"
            />
            <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass1) => setpass(pass1.trim())}
                        selectionColor="#1A374D"
            />
            <TextInput
                        placeholder="Retype Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass2) => setPassTwo(pass2.trim())}
                        selectionColor="#1A374D"
            />
            </View>
            <View style={styles.signup}>
                <FlatButton style={styles.signup} text="Sign Up" onPress={handlePress} />
                <View style={{marginBottom:20, marginTop:20}}>
                    <Text style={styles.note}>Have an account?</Text>
                    <FlatButton style={styles.login} text="Login" onPress={()=> (
                    navigation.pop())}/>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
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
        paddingVertical: 10,
        paddingHorizontal: 90,
        marginTop:50,
        color: "white"
    },
    textsub:{
        alignItems: 'center',
        fontFamily: 'Noteworthy',
        fontSize: 15,
        fontWeight: "bold",
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 30,
        color: "white"
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
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
    signup:{
        alignItems: 'center',
        color:"white",
        width:"45%",
        marginTop: 15,
        marginBottom: 15,
        marginHorizontal:100,
    },

    note:{
        fontFamily: 'Noteworthy',
        fontSize: 20,
        fontWeight: "bold",
        color:"white",
        marginTop: 25,
        marginBottom: 10,
    },
    
    login:{
        alignItems: 'center',
        color:"white",
        width:"45%",
        marginTop: 15,
        marginBottom: 15,
        marginHorizontal:100,
    },

});
export default forms