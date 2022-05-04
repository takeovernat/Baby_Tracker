import React, { useContext, useState, useEffect, Children } from 'react';
import { StyleSheet, Button, View, Text, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FlatButton from '../styles/button';
import { ListItem , SearchBar, Avatar, Divider}  from "react-native-elements";
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Childrencomponent from '../components/children';
import AuthContext from '../context';
import { ScrollView } from 'react-native-gesture-handler';
import Childstatlist from '../components/childstatlist';
import Header from '../components/header';
import Colors from '../styles/colors';
import progressStack from './progressQ';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import Childstatindashboard from '../components/childstatindashboard';
 
function dashStack (props){
  const username = props.route.params.username
  const dashoardStack = createStackNavigator();
  const [children, setchildren] = useState(null);
  const [childhealth1, sethealth1] = useState(null);
  const [childhealth2, sethealth2] = useState(null);
  const [childhealth3, sethealth3] = useState(null); 
  const childrenIds = [];
  

  useEffect(() => {
  
    axios
      .get(`http://localhost:3000/child/Admin/${username}`)
      .then((res)=> {
          setchildren(res.data);  
      })
      .catch((err) => console.log(`There was an error retrirving childrens for admin ${username}`, err));

  
  }, [])

  useEffect(() => {
  
    axios
      .get(`http://localhost:3000/child_health/${childrenIds[0]}`)
       .then((res)=> {
       sethealth1(res.data);
          
      })
     .catch((err) => console.log(`There was an error retrirving childrens health for id ${childrenIds[0]}`, err));
  }, [children])
  
  //console.log("healthh ", childhealth1[0])
  //console.log("healthh ", children[0])
 
  
  if(children !== null){
  children.map( child=> 
    childrenIds.push(child.child_id)
  );
   console.log("id ", childrenIds[0])
  
    
}

return(

    <dashoardStack.Navigator initialRouteName='home'>
      <dashoardStack.Screen name="home" component={HomeScreen} 
        initialParams={username}
            options={{   
                headerMode:'none',
              headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <dashoardStack.Screen name='progress' component={progressStack}
            initialParams={username}
            options={{   
                headerMode:'none',
              headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />

      </dashoardStack.Navigator>
);
//


function HomeScreen(props) {

  const [Search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  //const username = props.route.params.username
  const { signOut } = React.useContext(AuthContext);
  let childrenDash = null;

  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}

console.log(children)
//console.log("helth see ", childhealth1[0])
// const childrenstat = {
//   "daily_calories" : childhealth1[0].daily_calories,
//   "diaper_change_soft" : childhealth1[0].ddiaper_change_soft,
//   "diaper_change_hard" : childhealth1[0].diaper_change_hard,
//   "water_intake_cups": childhealth1[0].water_intake_cups,
//   "sleep_time": childhealth1[0].sleep_time,
//   "record": childhealth1[0].record,
// }

if(children !== null){

  childrenDash = children.map( child =>
   <> 
  <Button title= {"check in for " + child.first_name + " "+ getCurrentDate()} onPress={()=> props.navigation.navigate('progress')}/>
   <Childrencomponent cardtitle={child.first_name + " " + child.last_name} cardsub={(child.gender).toUpperCase()} title={"age: "+child.age_months+" months"} Content="status - healthy"></Childrencomponent>
   {/* <Childstatindashboard childrenstat={childrenstat} ></Childstatindashboard> */}
   
   </>
    
     );   
}

  
//console.log("ch", children)

  if (children === null){
    return (
      <ScrollView style={styles.container}>
  
      
        <View >
            <Header title={"welcome "+ ''}subtitle="error retrieving data"></Header>
            
      <View style={styles.stats}>
  
      <Image onPress={()=> props.navigate.navigation('progress')} style={styles.image} source={require("../assets/checkin.png")}  />
      <Button title="check in for 10/18/2022${date()}" onPress={()=> props.navigation.navigate('progress')}/>
      {/* {childrenDash} */}
        <Childstatlist>
  
        </Childstatlist>
        </View>
     
        <View style={styles.children}>
          <Childrencomponent cardtitle="John Doe" cardsub="child 1" title="Day #1" Content="status - healthy">
  
          </Childrencomponent>
        </View>
            
        </View>
        </ScrollView>
    );
   


  }
  else{
    return (
      <ScrollView style={styles.container}>
  
      
        <View >
            <Header title={"welcome "+ username}subtitle=""></Header>
            
      <View style={styles.stats}>
  
      <Image onPress={()=> props.navigate.navigation('progress')} style={styles.image} source={require("../assets/checkin.png")}  />
     
      {/* <Button title= {"check in for " + children[0].first_name + " "+ getCurrentDate()} onPress={()=> props.navigation.navigate('progress')}/> */}
      {childrenDash}
        </View>      
        </View>
        </ScrollView>
    );
   
  }

  

}

///
}//dashstack

  const styles = StyleSheet.create({
    container: {
        flex: 1,
  
        backgroundColor: "black",
        //alignItems: 'flex-start',
        //justifyContent: 'flex-start',
    },
    image: {
        height: 100, 
        width: 100,
        aspectRatio: 1,
        alignSelf: 'center'
  },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 35,
        justifyContent: 'center',
        fontWeight: "bold",
        paddingVertical: -30,
        color: 'white'
    }, 
    children:{
    paddingLeft:10,
    paddingRight:10

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
  stats:{
    marginBottom:5,
    marginTop:5,
    paddingLeft:10,
    paddingRight:10
  }
  });
  
  export default dashStack;

