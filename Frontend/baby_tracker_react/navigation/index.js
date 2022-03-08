import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from '../screens/welcome';
import login from '../screens/login'
import { useEffect } from 'react';
import forms from '../screens/forms';
import AuthContext from '../context';
import forgetpass from '../screens/forgetpass';
import confirm from '../screens/confirm';


const stack = createNativeStackNavigator();
const Navstack = () => {


    return (
       
            <stack.Navigator  initialRouteName={login}>
                <stack.Screen
                name = "login"
                component={login}
                options={{headerShown:false}}
                />
                <stack.Screen
                name = "signup" component={forms} options={{headerShown: false}} />
                <stack.Screen
                name = "ResetPassword" component={forgetpass} options={{headerShown: false}} />
                <stack.Screen
                name = "ConfirmCode" component={confirm} options={{headerShown: false}} />
            </stack.Navigator>
        
    );
    
};

export default Navstack;