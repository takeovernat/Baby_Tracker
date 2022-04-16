import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TextInput, Dimensions} from 'react-native';
import FlatButton from '../styles/button';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function dailystat(props)
{
    const [mealct, setMealct] = useState('');
    const [dailycal, setDailycal] = useState('')
    const [diaperhard, setDiaperhard] = useState('')
    const [diapersoft, setDiapersoft] = useState('')
    const [waterintake, setWaterintake] = useState('')
    const [childmvmt, setChildmvmt] = useState('')
    const [sleeptime, setSleeptime] = useState('')

    const handlePress = () => {
        const health = {
            health_id: props.route.params.children.health_id+1,
            child_id: props.route.params.children.child_id,
            meal_count: mealct,
            daily_calories: dailycal,
            diaper_change_hard: diaperhard,
            diaper_change_soft: diapersoft,
            water_intake_cups: waterintake,
            child_movement: childmvmt,
            sleep_time: sleeptime,
            record: new Date()
        }
        axios.post('http://localhost:3000/child_health/', health)
        .then((res) => console.log(res.data))
        .catch((err) => console.log( err.response.request._response ));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>HealthyBabies©</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder = 'Meal Count'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(mealct) => setMealct(mealct.trim())}
                    selectionColor="#1A374D"
                />
                <TextInput
                    placeholder = 'Daily Calories Estimate'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(dailyct) => setDailycal(dailyct.trim())}
                    selectionColor="#1A374D"
                />
                <TextInput
                    placeholder = 'Daily Water Intake'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(water) => setWaterintake(water.trim())}
                    selectionColor="#1A374D"
                />
                <TextInput
                    placeholder = 'Sleep time'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(sleeptime) => setSleeptime(sleeptime.trim())}
                    selectionColor="#1A374D"
                />
                <TextInput
                    placeholder = 'Diaper change hard'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(diaperh) => setDiaperhard(diaperh.trim())}
                    selectionColor="#1A374D"
                />
                <TextInput
                    placeholder = 'Diaper chage soft'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(diapers) => setDiapersoft(diapers.trim())}
                    selectionColor="#1A374D"
                />
                <TextInput
                    placeholder = 'Child movement'
                    placeholderTextColor="black"
                    placeholderTextFont="Noteworthy"
                    autoCapitalize='none'
                    style={styles.textInput}
                    onChangeText={(childmvmt) => setChildmvmt(childmvmt.trim())}
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