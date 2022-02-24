import * as React from 'react';
import { Button, Text, TextInput, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { MainNav } from './navigation/MainNav';
import welcomescreen, {welcome} from './screens/welcome';
import SignUpScreen from './screens/login';
import AuthContext from './context';
import index from './navigation/index'
import axios from 'axios';
import QuestionStack from './screens/childrenquestionare';

const Stack = createStackNavigator();
//console.log("heyyyy")
export default function App({ navigation }) {
  const [users, setUsers] = React.useState([]);
  //const [DarkorLight, SetDarkorLight] = React.useState('');
  //console.log("heyyyy")
//use refuced that dispaches actions where we want them, actions are sign in and out
//it also holds our global states kike usertoken usernane etc
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            username:action.username,

          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      username: null,
    }
  );

  //not being used right now, its for restoring session tokens
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }
      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  //we call the function signIn which is a use memo, it call the action sign in with the dispacher from recduer above
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log("Signed in user ", data)
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', username: data });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
      
        console.log("Registed user ", data)
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', username: data });
      }
    }),
    []
  );
  const load = (props)=>{

    React.useEffect(() => {
      axios
          .get(`http://localhost:3000/child/admin/${state.username}`)
          .then((res)=> {
              console.log(res.data);
              props.navigation.navigate('Home');
              //sethasChild(true)
            })
            .catch((err) =>  props.navigation.replace('initial'))
    
    
    })
    return(
      <View style={{ marginTop:400, marginLeft:150}}>
        <Text style={{fontSize:22}}>Loading...</Text>
      </View>
    );
  }

  //creates a stack for auth like welcome, signin, signuop screesn and last one is a nested stack called mainnav,
  //mainnav is located in navigaion/mainnav, 
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={welcomescreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Group>
              <Stack.Screen
              name="welcome"
              component={welcomescreen}
              options={{ title:'', headerTintColor:true, animationTypeForReplace: state.isSignout ? 'pop' : 'push', headerShown: false
              }}
            />

            <Stack.Screen
              name="SignIn"
              component={index}
              options={{title:'',headerTintColor:true,animationTypeForReplace: state.isSignout ? 'pop' : 'push',headerShown: false
              }}
    
            />
            
            </Stack.Group>
          ) : (
            // User is signed in
            
            <Stack.Group>
              
               
              <Stack.Screen name="load" component={load}
            initialParams={{username:state.username}} 
            options={{headerShown: false}}
            />
              <Stack.Screen name="initial" component={QuestionStack}
            initialParams={{username:state.username}} 
            options={{headerShown: false}}
            />
              <Stack.Screen name="Home" component={MainNav}
            initialParams={{username:state.username}} 
            options={{headerShown: false}}
            />

              </Stack.Group>
            
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
