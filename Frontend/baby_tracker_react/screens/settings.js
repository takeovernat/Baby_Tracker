import FlatButton from "../styles/button";
import React, {useState} from 'react';
import { StyleSheet, Switch, Text, View, Image, ScrollView } from 'react-native';
import Colors from "../styles/colors";
import AuthContext from '../context';
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";


const settingStack = createStackNavigator()
const Settingstc = (props) => (
    
    <settingStack.Navigator  initialRouteName={home}>
        <settingStack.Screen name="home" component={home} options={{headerShown: false}}/>
        <settingStack.Screen name="acc" component={account} options={{headerTitle: "Account Overview", headerBackTitle: "Settings", 
            headerStyle:{backgroundColor: Colors.seconary}, headerTintColor: "black"}}/>
        <settingStack.Screen name="app" component={appearance} options={{headerTitle: "Appearance", headerBackTitle: "Settings", 
            headerStyle:{backgroundColor: Colors.seconary}, headerTintColor: "black"}}/>
        <settingStack.Screen name="priv" component={privacy} options={{headerTitle: "Privacy", headerBackTitle: "Settings", 
            headerStyle:{backgroundColor: Colors.seconary}, headerTintColor: "black"}}/>
        <settingStack.Screen name="out" component={signout} initialParams={props} options={{headerShown: false}}/>
    </settingStack.Navigator>
)
const account = () => {
    const accountOptions = [
        {title: 'Baby Information', onPress: ()=>{
            // navigation.navigate('acc')
        }},
        {title: 'Caregivers', onPress: ()=>{}},
        {title: 'Update username', onPress: ()=>{}},
        {title: 'Update email', onPress: ()=>{}},
        {title: 'Update password', onPress: ()=>{}},
    ] 
    return(
    <ScrollView style={[styles.container, {paddingTop: 10}]}>
        {
            accountOptions.map(({title, onPress})=> <TouchableOpacity key={title} onPress={onPress}>
                <View style={styles.tab}>
                    <Text style={styles.note}>{title}</Text>
                </View>
            </TouchableOpacity>)
        }
    </ScrollView>
)}
const privacy = () => {
    const privacyOptions = [
        {title: 'Update username', onPress: ()=>{}},
        {title: 'Update email', onPress: ()=>{}},
        {title: 'Update password', onPress: ()=>{}},
    ] 
    return(
        <ScrollView style={[styles.container, {paddingTop: 10}]}>
            {
                privacyOptions.map(({title, onPress})=> <TouchableOpacity key={title} onPress={onPress}>
                    <View style={styles.tab}>
                        <Text style={styles.note}>{title}</Text>
                    </View>
                </TouchableOpacity>)
            }
        </ScrollView>
    )}
const appearance = () => {
    const [toggled, setToggled] = useState(false)
    const toggleSwitch = () => {
        if(toggled) {
            //not dark mode
        }
        else {

        }
        setToggled(previousState => !previousState)
    }
    return(
    <View style={{backgroundColor: Colors.seconary, flex: 1}}>
        <View style={[styles.tab, {justifyContent: 'space-between', paddingBottom: 10}]}>
            <Text style={{marginTop: 25, fontFamily: 'Noteworthy',
                fontSize: 23}}> Dark mode</Text>
            <Switch style={{marginTop: 30}}onValueChange={toggleSwitch} value={toggled}/>
        </View>
    </View>
)}
const signout = (props) => {
    console.log(props.route.params.signout)
    {props.route.params.signout()}
    return(
        <View>
            <Text>hello </Text>

        </View>
        
    )
    

}

const home = ({navigation}) => {
    const settingsList = [
        {title: 'Account Settings', onPress: ()=>{
            navigation.navigate('acc')
        }, icon: "http://cdn.onlinewebfonts.com/svg/img_215059.png"},
        {title: 'Appearance', onPress: ()=>{navigation.navigate('app')}, icon: "https://www.iconpacks.net%2Ffree-icon%2Fsettings-3110.html&psig=AOvVaw3xAfDZRy1sYvw_-p2uz5Sy&ust=1644388776439000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDL_dy_7_UCFQAAAAAdAAAAABAD"},
        {title: 'Privacy and Security', onPress: ()=>{navigation.navigate('priv')}, icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Fprivacy-1753378&psig=AOvVaw1bHb18jXWCzZGvhUqifBIs&ust=1644388840972000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiltv6_7_UCFQAAAAAdAAAAABAD"},
        {title: 'Sign Out', onPress: ()=>{navigation.navigate('out')}, icon:"empty"}
    ]
    return (
    <ScrollView style={styles.container}>
            <Text style={styles.text}>HealthyBabies©</Text>
            {
                settingsList.map(({title, onPress, icon})=> <TouchableOpacity key={title} onPress={onPress}>
                    <View style={styles.tab}>
                        <Text style={styles.note}>{title}</Text>
                        <Image style={styles.icon} source={{uri: icon}}/> 
                    </View>
                </TouchableOpacity>)
            }
        </ScrollView>
)}
const SettingsScreen = () =>{
    const { signOut } = React.useContext(AuthContext);
    return(<Settingstc signout={signOut}/>);
    };
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: Colors.seconary,
    },
    icon: {
        height: 40, 
        width: 0,
        aspectRatio: 1,
  },
    text: {
        fontFamily: "Noteworthy",
        fontSize: 37,
        fontWeight: "bold",
        paddingLeft:20,
        color:"black",
        marginBottom: 30
    },
    tab:{
        paddingHorizontal: 10,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    }, 
    note:{
      fontFamily: 'Noteworthy',
      fontSize: 23,
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 20
  },
});

export default SettingsScreen