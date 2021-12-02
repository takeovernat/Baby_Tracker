import FlatButton from "../styles/button";
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 
const ChildrenScreen = (props) => {
  
      const babies = props.route.params
      console.log(props.route.params)
      //babies.map()
      Object.keys(babies).forEach((key)=>{
        console.log(babies[key].Name)
        // console.log(babies[key].age)
        // console.log(babies[key].lastDiaperChange)
        // console.log(babies[key].hoursSlept)

        return(
        <Baby name={babies[key].Name}
              age={babies[key].age}
              lastDiaper={babies[key].lastDiaperChange}
              hoursSlept={babies[key].hoursSlept}
            />
      )})

      /*((key, value)=>{
        console.log(value)
        Object.keys(value).forEach((k, v)=>{
          console.log(k + " " + v)
        })
      })*/

  return(
      <View style={styles.container}>
      <Text style={styles.text}>Children
      {  
        Object.keys(babies).forEach((key)=>{
        console.log(babies[key].Name + "in text\n")
        // console.log(babies[key].age)
        // console.log(babies[key].lastDiaperChange)
        // console.log(babies[key].hoursSlept)
        
        return(<Text>{babies.one.Name}</Text>
          )
      })
      }
      <Text> {babies.one.Name}</Text>
      </Text>
      </View>
    )
};
  const Baby = ({ name, age, lastDiaper, hoursSlept }) => {
    return(
      <View>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{lastDiaper}</Text>
        <Text>{hoursSlept}</Text>
      </View>
  )};
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#EDBFB7',
        alignItems: 'center',
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