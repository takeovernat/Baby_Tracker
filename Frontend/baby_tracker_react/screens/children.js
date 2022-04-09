import FlatButton from "../styles/button";
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Dimensions } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Icon , Header} from "react-native-elements";
import axios from "axios";
import Colors from "../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import Childstatlist from "../components/childstatlist";
import { BarChart, graphStyle } from "react-native-chart-kit";
import { VictoryBar, VictoryChart, VictoryLabel } from "victory-native";

  const cStack = createStackNavigator();
  function ChildrenStack(children) {
    return (
     <cStack.Navigator initialRouteName="Children">
       <cStack.Screen name="Children" component={home} 
       options={{
         headerStyle:{backgroundColor:Colors.primary, shadowColor: "transparent" }, headerShown: false,
         title: ''}}
        initialParams={children}
       />
       <cStack.Screen name="child details" component={childDetails}        
       options={{ headerShown: false,title: ''}}
       />
       
       <cStack.Screen name="input" component={dailyInput} 
       options={{ headerShown: false,title: ''}}
       />
       {/* <cStack.Screen name="Settings" component={ChildrenScreen} /> */}
 
     </cStack.Navigator>
   );
 }
const home = props => {
  const children = props.route.params.children
  const date = new Date(children.record)
  children.record = date.toString()
  children.record = children.record.slice(0, (children.record.indexOf(":")-2))
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {props.route.params.children.admin_username}</Text>
      <Text style={styles.smalltext}> Here are the stats for {props.route.params.children.first_name +' '+ props.route.params.children.last_name}</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('child details', {children: children})}>
        <View style={styles.card}>
          <Childstatlist children={children}></Childstatlist>
        </View>
      </TouchableOpacity>
      <View style={{marginTop:30}} >
        <FlatButton text="Click here to input today's stats" onPress={() => {
          props.navigation.navigate('input')}}/>
      </View>
    </View>
  )
}
const dailyInput = () => {
  return (
    <View style={styles.container}></View>
  )
}
const childDetails = props => {
  const data = {
    labels: ["HEALTH"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  const chartTheme = {
    axis: {
      style: {
        axis: {
          fill: "transparent",
          stroke: "white",
          strokeWidth: 2,
        },
        data: {
          fill: 'white',
          strokeWidth: 0
        },
        tickLabels: {
          fill: 'white',
          padding: 10
        },
        grid: {
          fill: "none",
          stroke: 'white',
          pointerEvents: "painted",
          strokeWidth: 0.5 
        },
      },
      bar: {
        style: {
          data: {
            fill: 'white',
            strokeWidth: 0
          },
          // labels: baseLabelStyles
        }
      },
    },
  };
  
  return (
    <ScrollView style={{backgroundColor: Colors.primary}}>
      <View style={{paddingTop: 20}}>
        <VictoryChart theme={chartTheme} domainPadding={10}>
          <VictoryLabel text="Daily Calories" x={205} y={30} textAnchor="middle" style={{fill: 'white', fontSize: 16}}/>
          <VictoryBar
            style={{ data: { fill: "white" } }}
            data={[null, 
              { x: 1, y: 2, y0: 1 },
              { x: 2, y: 3, y0: 2 },
              { x: 3, y: 5, y0: 2 },
              { x: 4, y: 4, y0: 3 },
            ]}
          />
        </VictoryChart>
      </View>
      <View style={{paddingTop: 20}}>
        <VictoryChart theme={chartTheme} domainPadding={10}>
          <VictoryLabel text="Height" x={205} y={30} textAnchor="middle" style={{fill: 'white', fontSize: 16}}/>
          <VictoryBar
            style={{ data: { fill: "white" } }}
            data={[null, 
              { x: 1, y: 2, y0: 1 },
              { x: 2, y: 3, y0: 2 },
              { x: 3, y: 5, y0: 2 },
              { x: 4, y: 4, y0: 3 },
            ]}
          />
        </VictoryChart>
      </View>
      <View style={{paddingTop: 20}}>
        <VictoryChart theme={chartTheme} domainPadding={10}>
          <VictoryLabel text="Diaper Change" x={205} y={30} textAnchor="middle" style={{fill: 'white', fontSize: 16}}/>
          <VictoryBar
            style={{ data: { fill: "white" } }}
            data={[null, 
              { x: 1, y: 2, y0: 1 },
              { x: 2, y: 3, y0: 2 },
              { x: 3, y: 5, y0: 2 },
              { x: 4, y: 4, y0: 3 },
            ]}
          />
        </VictoryChart>
      </View>
    </ScrollView>
  )
}
let children
 
const ChildrenScreen = (props) => {
 const [isLoading, setLoading] = useState(true);
 useEffect( () => {
  const fetchChildren = async () => {
  children = (await axios.get(`http://localhost:3000/Child/admin/${props.route.params.username}`)).data[0]
//  console.log(children)

  children = {...children, ...(await axios.get(`http://localhost:3000/child_health/${children.child_id}`)).data[0]}

  children = {...children, ...(await axios.get(`http://localhost:3000/child_size/${children.child_id}`)).data[0]}
  console.log(children)

  setLoading(false)
  }
  fetchChildren()
}, [])

if (isLoading)
  {
    return(
      
      <View style={styles.container}>
        <Text style={styles.text}>
            LOADING... //todo
            must figure out if loading or user has no children..
        </Text>
      </View>
    )
  }
  return(
      <ChildrenStack children={children}/>
    )
};

  const styles = StyleSheet.create({
    card:{
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#406882',
      shadowOffset: {width: 2, height: 2},
      shadowColor: '#333',
      shadowOpacity: 0.8,
      shadowRadius: 4,
      marginTop: 20,
    },
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "black",
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
        fontWeight: "bold",
        marginTop: 20,
        color: "white"
    },
    smalltext:{
      fontFamily: 'Noteworthy',
      fontSize: 24,
      marginTop: 20,
      color: 'white',
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