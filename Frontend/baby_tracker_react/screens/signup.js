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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNav } from '../navigation/MainNav';
import Navstack from '../navigation';
import AuthContext from '../context';
import FlatButton from '../styles/button';

export default function SignUpScreen({navigation}){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Baby Tracker</Text>
                <Image
                style={styles.image}
                source={{uri:'https://cdn-icons-png.flaticon.com/512/941/941515.png'}}/>
                <View style={styles.open}></View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        //value={username}
                        placeholder="username"
                        placeholderTextColor="black"
                        placeholderTextFont="Noteworthy"
                        style={styles.textInput}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(pass) => setPassword(pass) }
                    />

                    <View>
                        <View style={styles.textInputContainer}>
                            <FlatButton text='Login' onPress={() => signIn({ username, password })}/>
                        </View>
                    </View>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.note}>Don't have an account?</Text>
                    <FlatButton text="Sign Up" onPress={()=> (
                        <Navstack/>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5b0d4',
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
        fontSize: 43,
        fontWeight: "bold",
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 70
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
        marginTop: 5,
        padding: 18,
        width: '75%'
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    note:{
        fontFamily: 'Noteworthy',
        fontSize: 24,
        fontWeight: "bold",
    },
    
    signup: {
        marginTop: 180,
        marginBottom: 500
    },

});