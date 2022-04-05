import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {SafeAreaView, TextInput, View, Text, StyleSheet, Button, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import {Pressable} from 'react-native';
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
import RadioButton from "../components/radiobutton"

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
          .post(`http://10.0.2.2:3000/Admin/${name.trim()}` , {
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
   
              if( first == null || first.length < 3 ||  first == ' ') {alert('please enter a valid first name'); return;}
              
              else if(last == null || last.length < 3 || last == ' ' ) {alert('please enter a valid last name'); return;}
              
              else if(age == null || age == '0' ||  age.length > 2) {alert('please enter a valid age'); return;}
              
               axios
               .post('http://10.0.2.2:3000/child', {
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
    const [gender, onChangeGender] = React.useState(null);
    //const name = '';)
    const username = props.route.params.username;
    const nav = props.route.params;
    const firstkidname = props.route.params.first;
    const children = props.route.params.children;

    //console.log(props)
   //23console.log( props)
   const handlePress = () =>{
    
    if(text == null ||text.length < 3 ||  text == ' ' ) {alert('please enter a valid first name'); return;}
              
    else if(number == null || number.length < 3 ||  number == ' ' ) {alert('please enter a valid last name'); return;}
    
    else if(age == null || age == '0' ||  age.length > 2) {alert('please enter a valid age'); return;}
   

    axios
    .post('http://10.0.2.2:3000/child', {
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

} //handlePress

const handleGender=()=>{
  
}
   
   return (
      
      <View style={styles.container} >
          <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
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
      
      <View style={styles.radioM}> 
      <TouchableOpacity style={{display:'flex', flexDirection:'row'}} onPress={()=>onChangeGender('m') } >
        <RadioButton/>
        <Text style={{padding:5}}>Male</Text>
        </TouchableOpacity>
      </View >
      <View style={styles.radioF}> 
      <TouchableOpacity style={{display:'flex', flexDirection:'row'}} onPress={()=>onChangeGender('f')} >
        <RadioButton/>
        <Text style={{padding:5}}>Female</Text>
        </TouchableOpacity>
      </View>

        
    </SafeAreaView>
        <View style={styles.arrowscroll}>
        <Icon  
            name="arrow-forward-ios" 
            color="grey"  
            onPress={handlePress }
            />
        </View>
        </ScrollView>     
        </KeyboardAvoidingView>
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
    
    const handlePress= () =>{

      if(text == null ||text.length < 3 ||  text == ' ' ) {alert('please enter a valid first name'); return;}
              
    else if(number == null ||number.length < 3 ||  number == ' ' ) {alert('please enter a valid last name'); return;}
    
    else if(age == null || age == '0' ||  age.length > 2) {alert('please enter a valid age'); return;}
   
      axios
                .post('http://10.0.2.2:3000/child', {
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
            onPress={handlePress}
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
            .get(`http://10.0.2.2:3000/child/admin/${username}`)
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
            marginTop:50,
            marginBottom:20,
            fontFamily: "Academy Engraved LET",
            fontSize: 45,
            

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
            
        },
          arrowscroll:{
            marginTop:150 ,
            alignSelf:"flex-end",
            paddingRight: 30,
            
        },
        radioM:{
          display: "flex",
          flexDirection: "column",
          margin: 10,

        },
        radioF:{
          display: "flex",
          flexDirection: "column",
          margin: 10,

        },
        male:{

        },
        female:{

        }




      });
      

    
