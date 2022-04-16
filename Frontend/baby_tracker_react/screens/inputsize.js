import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TextInput, Dimensions} from 'react-native';
import FlatButton from '../styles/button';
import axios from 'axios';

export default function inputsize(props)
{
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('')


    const handlePress = () => {
        const size = {
            child_id: props.route.params.children.child_id,
            height: height,
            weight: weight,
            record: new Date()
        }
        axios.post('http://localhost:3000/child_size/', size)
        .then((res) => console.log(res.data))
        .catch((err) => console.log( err.response.request._response ));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>HealthyBabies©</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder = 'Height'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(height) => setHeight(height.trim())}
                    selectionColor="#1A374D"
                />
                <TextInput
                    placeholder = 'Weight'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(weight) => setWeight(weight.trim())}
                    selectionColor="#1A374D"
                />
            </View>
            <View style={{marginTop:20}}>
                <FlatButton text='Input information' onPress={handlePress}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: "#EDBFB7",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    containerDark:{
      flex: 1,
      paddingTop: 30,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    image: {
      height: 300,
      width: 100,
      aspectRatio: 0.8,
      resizeMode: "contain",
      marginTop: 60,
    },
    text: {
      fontFamily: "Noteworthy",
      fontSize: 37,
      fontWeight: "bold",
      marginTop: 20,
      color:"black",
      alignItems:"center",
      marginBottom: 20,
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    textInput: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#652419',
        color: 'white',
        marginTop: '2%',
        padding: 15,
        width: '75%',
        backgroundColor:"#d97969"
    }
  });