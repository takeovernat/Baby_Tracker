import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FlatButton from '../styles/button';
import { ListItem , Header, SearchBar, Avatar, Divider}  from "react-native-elements";


import AuthContext from '../context';

 
function HomeScreen(props) {
    const [Search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const username = props.route.params.username
    console.log(props)
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
             <Text style={styles.text}>Welcome {username} !</Text>
             <Divider
  orientation="horizontal"
  width={5}
/>
             <View>
        <SearchBar
        selectionColor='white'
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={Search}
      />
      </View >
      <View style={{marginTop:100}}>
      <ListItem>
  <Avatar
    title="child1"
    rounded={true}
    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg" }}
  />
  <ListItem.Content>
    <ListItem.Title>Ronald</ListItem.Title>
    <ListItem.Subtitle style={{fontSize:12}}>age: 1</ListItem.Subtitle>
  </ListItem.Content>
  </ListItem>

    </View> 

    <View style={{marginTop:10}}>
    <ListItem>
  <Avatar
    title="child2"
    rounded={true}
    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg" }}
  />
  <ListItem.Content>
    <ListItem.Title>Sarah</ListItem.Title>
    <ListItem.Subtitle style={{fontSize:12}}>age: 2</ListItem.Subtitle>
  </ListItem.Content>
  </ListItem>
        </View>
            
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight:10,
        backgroundColor: '#EDBFB7',
        //alignItems: 'flex-start',
        //justifyContent: 'flex-start',
    },
    image: {
        height: 200, 
        width: 100,
        aspectRatio: .8,
  },
    text:{
        fontFamily: 'Noteworthy',
        fontSize: 35,
        justifyContent: 'center',
        fontWeight: "bold",
        paddingVertical: -30,
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
  });
  
  export default HomeScreen

