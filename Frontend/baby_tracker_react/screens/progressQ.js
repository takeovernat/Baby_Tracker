import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {SafeAreaView, TextInput, View, Text, StyleSheet, Button, Image } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../styles/colors";
import { Icon } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from '../context';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import { Dimensions } from "react-native";


const Q1 = (props)=>{
    const [age, onChangeAge] = React.useState(null);
    const [children, onChangeChildren] = React.useState(null);


    const handlepress = ()=>{
        props.navigation.replace('Q2')
      
    }
    return (

        /*diaper change hard soft
    water intake
    active
    sleep
    date
    height
    weight*/
      <View style={styles.container} >
            <Image style={styles.img} source={require("../assets/baby.png")}/>
          <Text style={styles.fontyQ1}>welcome back! report progress everyday so we can give a detailed output </Text>
          <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder=" how many meals did eat today?"
        //keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeChildren}
        value={children}
        placeholder="aproximately how many calories did eat today?"
        //keyboardType="numeric"
        />
    </SafeAreaView>
        <View style={styles.arrow}>
        <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={ handlepress} 
                
            />

        </View>
                
     </View>
    );
}

const Q2 = (props)=>{
    const [age, onChangeAge] = React.useState(null);
    const [children, onChangeChildren] = React.useState(null);


    const handlepress = ()=>{
        props.navigation.replace('Q3')
      
    }
    return (

        /*
    diaper change hard soft
    active
    sleep
    date
    height
    weight*/
      <View style={styles.container} >
           <Image style={styles.img} source={require("../assets/water-1542.png")}/>
          <Text style={styles.fontyQ2}>remember the recomended water intake for kids under 12 months is 0.5 to 1 cup a day </Text>
          
          <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="how much water in cups did have?"
        
        //keyboardType="numeric"
      />
    

    </SafeAreaView>
        <View style={styles.arrowQ2}>
        <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={ handlepress} 
                
            />

        </View>
                
     </View>
    );
}

///

const Q3 = (props)=>{
  const [age, onChangeAge] = React.useState(null);
  const [children, onChangeChildren] = React.useState(null);


  const handlepress = ()=>{
      props.navigation.replace('Q4')
    
  }
  return (

      /*
  active
  sleep
  date
  height
  weight*/
    <View style={styles.container} >
         <Image style={styles.img} source={require("../assets/diaper.png")}/>
        <Text style={styles.fontyQ2}>normally toddlers have bowel movements 2-3 times and pee 4-8 times daily </Text>
        
        <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onChangeAge}
      value={age}
      placeholder="how many hard diaper changes?"
      
      //keyboardType="numeric"
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeAge}
      value={age}
      placeholder="how many soft diaper changes?"
      
      //keyboardType="numeric"
    />
  

  </SafeAreaView>
      <View style={styles.arrowQ3}>
      <Icon  
          name="arrow-forward-ios" 
          color="grey"  
          onPress={ handlepress} 
              
          />

      </View>
              
   </View>
  );
}
//
const Q4 = (props)=>{
  const [age, onChangeAge] = React.useState(null);
  const [children, onChangeChildren] = React.useState(null);


  const handlepress = ()=>{
      props.navigation.replace('Q4')
    
  }
  return (

      /*
  active
  sleep
  date
  height
  weight*/
    <View style={styles.container} >
         <Image style={styles.imgsleep} source={require("../assets/sleepbaby.png")}/>
        <Text style={styles.fontyQ2}>toddlers should get atleast 12 hours asleep, see your doctor if your toddler sleeps less than 10 </Text>
        
        <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onChangeAge}
      value={age}
      placeholder="how many hard diaper changes?"
      
      //keyboardType="numeric"
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeAge}
      value={age}
      placeholder="how many soft diaper changes?"
      
      //keyboardType="numeric"
    />
  

  </SafeAreaView>
      <View style={styles.arrowQ3}>
      <Icon  
          name="arrow-forward-ios" 
          color="grey"  
          onPress={ handlepress} 
              
          />

      </View>
              
   </View>
  );
}

//if user doesn't have babies they get denied
    //const username = props.route.params;
    
    export default function progressStack(props) {
        
        //const name = props.route.params.name;
        //console.log(name)
      const nav = props.navigation;
      //var has
        const questionstack = createStackNavigator();
        return (
            
          <questionstack.Navigator initialRouteName="Q1" >
            <questionstack.Screen name="Q1" component={Q1} 
            //initialParams={name}
            options={{   
                headerMode:'none',
              headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="Q2" component={Q2} 
            //initialParams={name, nav}
            options={{   
                
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="Q3" component={Q3} 
           // initialParams={name, nav}
            options={{    
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="Q4" component={Q4} 
            //initialParams={name, nav}
            options={{
                 
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
       
          </questionstack.Navigator>
        );
      }

      const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
      const styles = StyleSheet.create({

        img:{
          marginTop: 20,
          height:160,
          width: 160,
          alignSelf: "center",
          opacity: 0.8
          //backgroundColor:"black"
          //marginTop: 120
        },
        imgsleep:{
          marginTop: 20,
          height:160,
          width: 300,
          alignSelf: "center",
          opacity: 0.8
          //backgroundColor:"black"
          //marginTop: 120
        },
        fontyQ1: {
            marginTop:40,
            marginBottom:10,
            fontFamily: "Academy Engraved LET",
            fontSize: 40,
            padding:0
            

        },
        
        fontyQ2: {
            marginTop:40,
            marginBottom:30,
            fontFamily: "Academy Engraved LET",
            fontSize: 30,
            

        },
        
        fontyQ3: {
            marginTop:180,
            marginBottom:30,
            fontFamily: "Academy Engraved LET",
            fontSize: 50,
            

        },
        
        fontyp: {
            marginTop: 20,
            fontFamily: "Academy Engraved LET",
            fontSize: 25,
            alignSelf: "center"
            

        },

        container:{
            margin:10,
            padding:10,
            backgroundColor: 'rgb(247,242,242)'
        },
        input: {
            height: 40,
            margin: 20,
            borderWidth: 0.6,
            padding: 5,
          },
          arrow:{
              marginTop:60 ,
              paddingLeft: 340,
              
          },
          arrowQ2:{
            marginTop:150 ,
            alignSelf:"flex-end",
            paddingRight: 30,
            
        },
          arrowQ3:{
            marginTop:100 ,
            alignSelf:"flex-end",
            paddingRight: 30,
            
        }


      });
      

    
