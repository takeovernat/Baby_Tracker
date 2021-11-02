import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from '../screens/welcome';
import SignInScreen from '../screens/signin';
import options from '../screens/options'
import { useEffect } from 'react';


const stack = createNativeStackNavigator();
const Navstack = ({Auth, SetAuth}) => {
    
    //useEffect(() => {
      //  SetAuth(false);
    //});
    

    (Auth === true) ? console.log("true from index") : console.log("false from index");
    



    return (
       
            <stack.Navigator  initialRouteName={welcome} >

                <stack.Screen
                name = "welcome" component={welcome} options={{headerShown: false}}
                />
                <stack.Screen
                name="options" component={options} options={{headerShown: false}}
                />
                <stack.Screen
                name = "login"
                component={SignInScreen}
                options={{title: 'login'}}
                initialParams={{'Auth':Auth}}
                />
            </stack.Navigator>
        
    );
    
};

export default Navstack;