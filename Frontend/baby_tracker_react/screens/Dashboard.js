import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FlatButton from '../styles/button';
import { ListItem , Header, SearchBar, Avatar, Divider}  from "react-native-elements";
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Childrencomponent from '../components/children';
import AuthContext from '../context';
import { ScrollView } from 'react-native-gesture-handler';
import Childstatlist from '../components/childstatlist';

 
function HomeScreen(props) {
    const [Search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const username = props.route.params.username
    console.log(props)
    const { signOut } = React.useContext(AuthContext);
    return (
      <ScrollView>

      
        <View >
             <Text style={styles.text}>Welcome {username} !</Text>
             <Divider
  orientation="horizontal"
  width={5}
/>
      <View style={{}} >
        <Childstatlist>

        </Childstatlist>
        </View>
     
        <View>
          <Childrencomponent cardtitle="John Doe" cardsub="child 1" title="Day #1" Content="status - healthy">

          </Childrencomponent>
        </View>
            
        </View>
        </ScrollView>
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

