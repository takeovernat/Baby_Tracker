import FlatButton from "../styles/button";
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Icon , Header} from "react-native-elements";
import axios from "axios";
import children from '../components/children'

let babies = []

 const getChildren = (username) => {
  axios
    .get(`http://localhost:3000/Child/${username}`)
    .then((res)=> {
      babies = res.data
    })
    .catch((err) => console.log(err));
  };
 function display ()
 {
   console.log ("babies- ", babies)

   return babies.map((baby)=>{
     return(
      <Childrencomponent cardtitle="John Doe" cardsub="child 1" title="Day #1" Content="status - healthy">

      </Childrencomponent>

     )
   })

 }

const ChildrenScreen = () => {
  const username = props.route.params.username

  getChildren(username)
  return(
      <View>
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
        marginTop: 20,
        color: "white"
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