import FlatButton from "../styles/button";
import React, {useState} from 'react';
import {Dimensions} from "react-native"; // To make chart responsive to screen size.
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Card } from "react-native-paper";
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { Icon , Header} from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
// import {Picker} from '@react-native-picker/picker'; //
import { LineChart, PieChart } from "react-native-chart-kit"; // Documentation: https://www.npmjs.com/package/react-native-chart-kit
// May need to download react-native-chart-kit;
// download @react-native-picker/picker for a drop down menu.
// Add a 2 drop downs to select which child to graph, and what value to graph [height, weight, feedings, etc]
// Add a 3rd drop down for selecting the time period;

const user_babies = use_test_baby();

function use_test_baby(){
    const babies = {baby: new Array()};

    for (let i = 0; i < 10; i++){
        const add_baby = new Object();
        add_baby.age = i;
        add_baby.DOB = new Date(2020 - i, 12, 1);
        add_baby.name = "Baby " + i;
        add_baby.feedings = new Array();
        for (let x = 0; x < 10; i++){
            food = "";
            if ((i * x) % 2 == 0){
                food = "Spaghetti";
            }
            else {
                if(x % 2 == 0 && i % 2 == 0){
                    food = "Apple";
                }
                else if(x % 2 == 0){
                    food = "Waffles";
                }
                else if(i % 2 == 0){
                    food = "Carrots";
                }
            }
            const feed_data = {
                type: food,
            };
            add_baby.feedings.push(feed_data);
        }
        add_baby.id = "uniqueID " + i;
        babies["baby"].push(add_baby);
    }

    return babies;
}

// Pass an array of feeding objects.
function getFoodTotals(feedings) {
    const totals = new Array();
    totals.type = new Array();
    totals.count = new Array();
    for(food of feedings){
        for(type of totals.type) {
            if (type.type.length == 0 || food.type != type.type)
                type.type.push(food.type);
                type.count.push(1);
            else{
                type.count++;
            }
        }
    }

    return totals; // Should contain an object with two arrays, set to the different food types, and the food type count.
}

function setData(totals) {
    const data = [];
    for(type of totals){
        data.push({
        name: type.type,
        total: type.count,
        color: "#F00", // set to random color as added.
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
        });
    }

    return data;
}

function addPieChart(baby) {
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const totals = getFoodTotals(baby.feedings);
    const data = setData();
    return (<PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
                avoidFalseZero=true
            />)
}


//Add this to the view to show the piechart
