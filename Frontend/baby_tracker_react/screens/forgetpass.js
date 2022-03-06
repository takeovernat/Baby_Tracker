import React, {useState} from 'react';
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
import fonts from "../styles/fonts";
import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNav } from '../navigation/MainNav';
import Navstack from '../navigation';
import AuthContext from '../context';
import FlatButton from '../styles/button';
import md5 from 'md5'



const forgetpass = ({ navigation }) => {
  const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
      return (
        <View >
          <Text > Demo Form </Text>
          <View>
            <TextInput 
              placeholder="Email" />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
            />
            <Text>
              Selected: {currency}
            </Text>
          </View>
          <View style={styles.signup}>
                    <Text style={styles.note}>Don't have an account?</Text>
                </View>
                <FlatButton text="Sign Up" onPress={()=> (
                        navigation.navigate('signup')
                    )}/>
        </View>
      );
    };


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
      },
      text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
      }
    })
};

export default forgetpass;