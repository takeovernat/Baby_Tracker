import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions} from 'react-native';
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
            <Text style={styles.text}>HealthyBabies©</Text>
            <Text style={styles.textsub}> Monitor and take control of your children's health now</Text>
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
            <View style={{marginTop:20}}>
                <FlatButton  text="Sign Up" onPress={handlePress} />
                <View style={{marginBottom:20, marginTop:20}}>
                    <Text style={styles.note}>Have an account?</Text>
                    <Button color="black" title="Login" onPress={()=> (
                    navigation.pop())}/>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1A374D',
    },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: 'center',
        //paddingVertical: 100,
       // paddingHorizontal: 70,
        marginTop:100,
        color: "black"
    },
    textsub:{
        fontFamily: 'Noteworthy',
        fontSize: 15,
        color:"black",
        marginBottom:80

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
    note:{
        fontFamily: 'Noteworthy',
        fontSize: 20,
        fontWeight: "bold",
        color:"black",
        marginTop: 40
    },

});
export default forms