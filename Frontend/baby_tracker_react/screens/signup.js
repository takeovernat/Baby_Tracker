import * as React from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNav } from '../navigation/MainNav';
import AuthContext from '../context';

export default function SignUpScreen({navigation}){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (
        
            <SafeAreaView style={styles.container}>
                <View style={styles.open}></View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        //value={username}
                        placeholder="username"
                        placeholderTextColor="grey"
                        style={styles.textInput}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        style={styles.textInput}
                        //value={pass}
                        onChangeText={(pass) => setPassword(pass) }
                    />

                    <View>
                        <View style={styles.textInputContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => signIn({ username, password })}>
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
    
    signup: {
        marginTop: 200
    },

});