import FlatButton from "../styles/button";
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Icon , Header} from "react-native-elements";
import axios from "axios";

let babies = []

 const getChildren = () => {
  axios
    .get('http://localhost:3000/Admin')
    .then((res)=> {
      babies = res.data
    })
    .catch((err) => console.log(err));
  };
 function display ()
 {
   return babies.map((baby)=>{
     return(
      <ListItem.Swipeable
      leftContent={
        <Button
          title="Info"
          icon={{ name: 'face', color: 'red' }}
          buttonStyle={{ minHeight: '100%' }}
        />
      }
      rightContent={
        <Button
          title="Delete"
          icon={{ name: 'delete', color: 'white' }}
          buttonStyle={{ minHeight: '100%' }}
          color='red'
        />
      }
    >
      <Icon name="face" />
      <ListItem.Content>
        <ListItem.Title> {baby.name}</ListItem.Title>
      </ListItem.Content>
      
      <ListItem.Chevron />
    </ListItem.Swipeable>

     )
   })

 }

const ChildrenScreen = () => {
  
  getChildren()
  return(
      <View style={styles.container}>
        <Text style={styles.text}>Children</Text>
        <ScrollView>
          <View> 
            {display()}
          </View>
        </ScrollView>
        

    </View>

    )
};

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#EDBFB7',
        //alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        height: 300, 
        width: 100,
        aspectRatio: .8,
        //resizeMode: 'contain',
  },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 36,
        justifyContent: 'center',
        fontWeight: "bold",
        marginTop: 20
    }, 
    note:{
      fontFamily: 'Noteworthy',
      fontSize: 23,
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 20
  },
});

export default ChildrenScreen