import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions} from 'react-native';
import Navstack from "../navigation";
import FlatButton from '../styles/button';
import AuthContext from '../context';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const forms = ({navigation})=>{

    const [username, setUsername] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState("");
    const [passTwo, setPassTwo] = useState('');
    const [email, setemail] = useState('');

    const { signUp } = React.useContext(AuthContext);

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
        else {
            const newUser = {
                username: username,
                password: pass,
                email:email
            };
            axios
                .post('http://localhost:3003/users/add', newUser)
                .then((res) => console.log(res.data))
                .catch((err) => console.log( err.response.request._response ));
           
        }

        signUp(username, pass, email)
    };

    return(
        <ScrollView>

       
        <View style={styles.container}>
            <Text style={styles.text}>HealthyBabies©</Text>
            <Text style={styles.textsub}> Monitor and take control of your children's health now</Text>
            <TextInput
                        placeholder="Name"
                        onChangeText={(name) => setname(name.trim())}
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                    />
            <TextInput
                        placeholder="Username"
                        onChangeText={(user) => setUsername(user.trim())}
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
            />
            <TextInput
                        placeholder="Email"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        onChangeText={(email) => setemail(email.trim())}
            />
            <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass1) => setpass(pass1.trim())}
            />
            <TextInput
                        placeholder="Retype Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass2) => setPassTwo(pass2.trim())}
            />
            <View style={{marginTop:20}}>
                        <FlatButton  text="Sign Up" onPress={handlePress} />
            </View>
            
            <Text style={styles.note}>have an account?</Text>
            <Button title="login" onPress={()=> (
                navigation.pop()
            )}/>
                

        </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1A374D',
        //margin: 10
    },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: 'center',
        //paddingVertical: 100,
       // paddingHorizontal: 70,
        marginTop:150,
        color: "white"
    },
    textsub:{
        fontFamily: 'Noteworthy',
        fontSize: 15,
        color:"white",
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
        marginTop: 90,
        color:"white"
    },

});
export default forms