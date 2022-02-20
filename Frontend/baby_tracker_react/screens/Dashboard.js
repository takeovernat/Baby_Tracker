import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
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

 
function HomeScreen(props) {
    const [Search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const username = props.route.params.username
    // console.log(props)
    const { signOut } = React.useContext(AuthContext);
    return (
      <ScrollView style={styles.container}>

      
        <View >
            <Header title={"welcome "+ username}subtitle="calm down"></Header>
            
      <View style={styles.stats}>
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
  const New = true
function NewUser (props)
{

}
  const styles = StyleSheet.create({
    container: {
        flex: 1,
  
        backgroundColor: Colors.seconary,
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
  
  export default HomeScreen

