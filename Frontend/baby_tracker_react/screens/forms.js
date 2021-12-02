import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions} from 'react-native';
import Navstack from "../navigation";
import FlatButton from '../styles/button';
import AuthContext from '../context';
import axios from 'axios';

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
        <View style={styles.container}>
            <Text style={styles.text}>Welcome New User</Text>
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
                        style={styles.textInput}
                        onChangeText={(pass1) => setpass(pass1.trim())}
            />
            <TextInput
                        placeholder="Retype Password"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        onChangeText={(pass2) => setPassTwo(pass2.trim())}
            />
            <View style={{marginTop:20}}>
                        <FlatButton  text="Sign Up" onPress={handlePress} />
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