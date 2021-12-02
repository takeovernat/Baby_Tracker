import FlatButton from "../styles/button";
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Card } from "react-native-paper";
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { Icon , Header} from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';


const Children = [
  {
    baby_id:0,
    Name: "donald",
    age: 1,
    lastDiaperChange: "1638397371",
    hoursSlept: 8,
    weight:30,
    height:36,
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg',
  },
  {
    baby_id:1,
    Name: "sarah",
    age: 2,
    lastDiaperChange: "1638397375",
    hoursSlept: 5,
    weight:45,
    height:40,
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg',
  },
  
 ]
 
 
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
console.log(props.route.params);
  return(
      <View style={styles.container}>



      <Text style={styles.text}>Children
      </Text>
      <View style={{marginTop:100}}></View>

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
    <ListItem.Title> {Children[0].Name}</ListItem.Title>
  </ListItem.Content>
  
  <ListItem.Chevron />
</ListItem.Swipeable>


<View style={{marginTop:10}}>
<ListItem.Swipeable
  leftContent={
    <Button
      title="Info"
      icon={{ name: 'info', color: 'red' }}
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
    <ListItem.Title> {Children[1].Name}</ListItem.Title>
  </ListItem.Content>
  
  <ListItem.Chevron />
</ListItem.Swipeable>

</View>


    <View>

    
      </View>
      <View marginBottom={300}>
      
      </View>
      
      
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