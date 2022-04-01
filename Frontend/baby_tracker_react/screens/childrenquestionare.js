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
import { Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Q1 = (props)=>{
    const [age, onChangeAge] = React.useState(null);
    const [children, onChangeChildren] = React.useState(null);
    const username = JSON.stringify (props.route.params);

    //console.log("q1", username.replace(/[0-9:",{}()]+/g,''))
  const name = username.replace(/[0-9:",{}()]+/g,'')
  //handle press func
    const handlepress = ()=>{
      
      
      if(children == null || children == 0 || children == ''){
        props.navigation.replace('Deny')
        }
        else if(children == 1 || children == 2 || children == 3 && age > 13){
          
          const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

          axios
          .post(`http://localhost:3000/Admin/${name.trim()}` , {
            age:age,
            children:children
          },config)
          
          .then((res)=> {
              console.log(res.data);
          })
          .catch((err) => console.log(`error getting res from db/admin/uname post/update ${age}, ${children}`));
        
          
          props.navigation.replace('Q2',{children, name})
            } 
            else if(children > 3 || typeof(children) == String){
              props.navigation.replace('DenyThree')
            }


    }
    return (
      <View style={styles.container} >
          <ScrollView keyboardShouldPersistTaps='handled'> 
          <Text style={styles.fonty}> Hey {name} can we get to know you a litte more?</Text>
          <SafeAreaView>
      {/* <ScrollView keyboardShouldPersistTaps='handled'>  */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="What is your age?"
        keyboardType="numeric"
      />
      {/* </ScrollView> */}

      {/* <ScrollView keyboardShouldPersistTaps='handled'>  */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeChildren}
        value={children}
        placeholder="How many children do you want to register? 3 max"
        keyboardType="numeric"
        />
        {/* </ScrollView> */}
    </SafeAreaView>
        <View style={styles.arrow}>
        <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={ handlepress} 
                
            />

        </View>
           </ScrollView>     
     </View>
    );
}
const Q2 = (props)=>{
    const [first, onChangeFirst] = React.useState(null);
    const [last, onChangeLast] = React.useState(null);
    const [age, onChangeAge] = React.useState(null);
    const children = props.route.params.children
    //console.log("ch - ", props.route.params.navigate('Home'))
    //const name = '';
    const username = props.route.params.name;
    const nav = props.route.params;
   //console.log(props.route.params)
    //console.log(username)
    const handlePress = ()=>{
        //console.log(isNaN(first))
        //console.log(typeof(age))
              if(first.length < 3 || first == null || first == ' ') alert('please enter a valid first name'); return;
              console.log('here1')
              if(last.length < 3 || last == null || last == ' ' || isNaN(last)) alert('please enter a valid last name'); return;
              console.log('here2')
              if(age == '0' || age == ' ' || age == null || age.length > 2) alert('please enter a valid age'); return;
              console.log('here3')
               axios
               .post('http://localhost:3000/child', {
                 admin_username: username,
                 first_name:first,
                 last_name : last,
                 age_months: age,
                 gender : 'm'
                })
                .then((res)=> {
                  console.log(res.data)
                })
                .catch((err) => console.log(err));
                
                if(children==1){
                
                props.navigation.navigate('complete')
              }
              else{
               // console.log(props.navigation)
                //console.log("nig===>",children)
               props.navigation.replace('Q3',{first,children, username})
              }
            
            
    }
    return (
      <View style={styles.container} >
          <ScrollView keyboardShouldPersistTaps='handled'> 
          <Text style={styles.fonty}> Tell us more about your child👶🏼</Text>
          <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFirst}
        value={first}
        placeholder="first name"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLast}
        value={last}
        placeholder="last name"
        
        />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="age in months"
        keyboardType="numeric"
        
        />
    </SafeAreaView>
        <View style={styles.arrow}>
        <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={handlePress}//{
            />
        </View>     
        </ScrollView>     
      </View>
    );
}
const Q3 = (props)=>{
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [age, onChangeAge] = React.useState(null); 
    //const name = '';)
    const username = props.route.params.username;
    const nav = props.route.params;
    const firstkidname = props.route.params.first;
    const children = props.route.params.children;
    //console.log(props)
   //23console.log( props)
    return (
      
      <View style={styles.container} >
          <ScrollView keyboardShouldPersistTaps='handled'> 
          <Text style={styles.fonty}> Sweet! we hope {firstkidname} is doing great! How abour your second one?</Text>
          
          <SafeAreaView>
      <TextInput
        style={styles.input} onChangeText={onChangeText} value={text}
        placeholder="first name"
      />
      <TextInput
        style={styles.input} onChangeText={onChangeNumber} value={number}
        placeholder="last name"
        />
      <TextInput
        style={styles.input} onChangeText={onChangeAge} value={age}
        placeholder="age in months" keyboardType="numeric"
        />
    </SafeAreaView>
        <View style={styles.arrow}>
        <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={()=>
            {

              axios
               .post('http://localhost:3000/child', {
                 admin_username: username,
                 first_name:text,
                 last_name : number,
                 age_months: age,
                 gender : 'm'
                })
                .then((res)=> {
                  console.log( "created child obj in db",res.data)
                })
                .catch((err) => console.log(err));
               
             if(children == 2){
               props.navigation.navigate('complete')

             }
             else{
              props.navigation.replace('Q4',{text})
             }
              
            }
          }
            />
        </View>
        </ScrollView>     
      </View>
    );
}
const Q4 = (props)=>{
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [age, onChangeAge] = React.useState(null); 

  const username = props.route.params.username;
    const nav = props.route.params;
    const secondkidname = props.route.params.text
    const children = props.route.params.children
    
    //const name = '';
    return (
      <View style={styles.container} >
          <ScrollView keyboardShouldPersistTaps='handled'> 
          <Text style={styles.fonty}> Hi {secondkidname}!!! Last but not least who is it? 👀</Text>
    
          <SafeAreaView>
          <TextInput
        style={styles.input} onChangeText={onChangeText} value={text}
        placeholder="first name"
      />
      <TextInput
        style={styles.input} onChangeText={onChangeNumber} value={number}
        placeholder="last name"
        />
      <TextInput
        style={styles.input} onChangeText={onChangeAge} value={age}
        placeholder="age in months" keyboardType="numeric"
        />
    </SafeAreaView>
        <View style={styles.arrow}>
        <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={()=> 
              
              {
            
                axios
                .post('http://localhost:3000/child', {
                  admin_username: username,
                  first_name:text,
                  last_name : number,
                  age_months: age,
                  gender : 'm'
                 })
                 .then((res)=> {
                   console.log( "created child obj in db",res.data)
                 })
                 .catch((err) => console.log(err));
                props.navigation.navigate('complete')
              
            }
            
            }
            />
        </View>
    
          </ScrollView>
            
      </View>
    );
}
//if user doesn't have babies they get denied
const Deny = () =>{

    const { signOut } = React.useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.fonty}>Sorry you must have atleast one child to utuilze this application, come back when you have one :)</Text>
           <View style={{marginTop:80, marginLeft:320}}> 
            <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={signOut}
            />

           </View>
        </View>
    )
}
const DenyThree = (props) =>{


    return(
        <View style={styles.container}>
            <Text style={styles.fonty}>Sorry you can only do up to 3 children!</Text>
           <View style={{marginTop:280, marginLeft:320}}> 
            <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={() =>props.navigation.replace('Q1')}
            />

           </View>
        </View>
    )
}

const Complete = (props)=>{
  //console.log(props)
  const nav = props.route.params;
return (
  <View style={{marginTop:140}}>
    <Text style={styles.fontynomargin}>All Set</Text>
    <Image style={styles.img} source={require("../assets/thumb1.png")} />
    <Text style={styles.fontyp}>setting up your profile...</Text>
    <Icon  style={styles.arrow1}
            name="arrow-forward-ios" 
            color="grey"  
            onPress={()=>nav.replace('Home')}
            />
  </View>

);
}


    //const username = props.route.params;
    
    export default function QuestionStack(props) {
        
      
        //console.log("q props --->", props.username)
        
        const username = props.route.params.username;
        console.log(username)
      const nav = props.navigation;
      //var has
      React.useEffect(() => {
        axios
            .get(`http://localhost:3000/child/admin/${username}`)
            .then((res)=> {
                console.log(res.data);
                {}
              })
              .catch((err) => console.log("this admin does not have children questions first"))
      
             // console.log("has",has)
      
      })

        const questionstack = createStackNavigator();
        // if(){

        // }

        return (
             
          <questionstack.Navigator initialRouteName="Q1" >
            <questionstack.Screen name="Q1" component={Q1} 
            initialParams={username}
            options={{   
                headerMode:'none',
              headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="Q2" component={Q2} 
            initialParams={username, nav}
            options={{   
                
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="Q3" component={Q3} 
            initialParams={username, nav}
            options={{    
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="Q4" component={Q4} 
            initialParams={username, nav}
            options={{
                 
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="Deny" component={Deny} 
            options={{  
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="DenyThree" component={DenyThree} 
            options={{  
              headerMode:'none', headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" } ,
              title: ''}}
            />
            <questionstack.Screen name="complete" component={Complete} 
            initialParams={nav}
            options={{  
              headerMode:'none',
              title: ''}}
            />
      
          </questionstack.Navigator>
        );
      }

      const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
      const styles = StyleSheet.create({

        img:{
          height:160,
          width: 160,
          alignSelf: "center",
          //backgroundColor:"black"
          //marginTop: 120
        },
        fonty: {
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


        fontynomargin: {
          marginTop:150,
          fontFamily: "Academy Engraved LET",
          fontSize: 50,
          alignSelf: "center",
          

      },
        container:{
            margin:10,
            padding:10,
            backgroundColor: 'rgb(247,242,242)'
        },
        input: {
          height: 40,
          margin: 10,
          borderWidth: 0.6,
          padding: 5,
        },
          arrow:{
              marginTop:100 ,
              paddingLeft: 340,
              
          },
          arrow1:{
            marginTop:150 ,
            alignSelf:"flex-end",
            paddingRight: 30,
            
        }


      });
      

    
