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
        add_baby.toString = function toString(){
            var output = "Name: " + this.name;
            output = output + "DOB: " + this.DOB;
            output = output + "\tAge: " + this.age;
            output = output + "\tWeights: [" + this.weight.toString() + "]";
            //output = output + "\tWeight times: [" + this.weight_time.toString() + "]";
            output = output + "\tHeights: [" + this.height.toString() + "]";
            //output = output + "\tHeight times: [" + this.height_time.toString() + "]";
            return output;
        }
        add_baby.age = i;
        add_baby.DOB = new Date(2020 - i, 12, 1);
        add_baby.name = "Baby " + i;
        add_baby.weight = new Array();
        add_baby.weight_time = new Array();
        add_baby.height = new Array();
        add_baby.height_time = new Array();
        for(let x = 1; x < 11; x++){
            add_baby.weight.push(x*10);
            add_baby.weight_time.push(new Date(2020 - i, 12, x));
            add_baby.height.push(x);
            add_baby.height_time.push(new Date(2021, 12, x));
        }
        add_baby.id = "uniqueID " + i;
        babies["baby"].push(add_baby);
    }

    return babies;
}
function calculateAvg(list){
    sum = 0;
    for(i = 0; i < list.length; i++){
        sum += list[i];
    }
    return sum/list.length;
}

//list needs to be the to calculate; list_time needs to be an array of Date objects for list; time_length is the period to calculate by: 'month', 'day', 'year'
//Assumes the first date is the date of birth and the first value is the value at birth.
//Assumes height is in inches. Assumes weight is in lbs.
function calculateAvgGrowthOverTime(list, list_time, time_length){
    start_date = list_time[0];
    milliseconds_day = 1000 * 60 * 60 * 24; // (# of milliseconds in second) * (# of seconds in a minute) * (# of minutes in a hour) * (# of hours in a day);
    milliseconds_month = milliseconds_day * 30; // (# of milliseconds in a day) * (days in a month);
    milliseconds_year = milliseconds_day * 365; // (# of milliseconds in a day) * (days in a year);
    end_date = list_time[list_time.length - 1]
    start_value = list[0];
    sum = 0;
    time_difference = end_date - start_date;
    for(i = 0; i < list.length; i++){
        sum += list[i] - start_value;
    }
    if(time_length == "year"){
        divisor = time_difference/milliseconds_year;
    }
    if(time_length == "month"){
        divisor = time_difference/milliseconds_month;
    }
    if(time_length == "day"){
        divisor = time_difference/milliseconds_day;
    }
    return sum/divisor;
}

function setGraphDataYear(baby_data, baby_time_data, year){
    // Sets initial label month to DOB
    const dataset_year = {
        labels: [],
        datasets: [
            {
                data: [],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            }
        ]
    };
    //checks list for all dates in the given year;
    for (i = 0; i < ; i++){
        if(baby_time_data[i].getFullYear() == year)
            let date_string = baby_time_data[i].toDateString();
            dataset_year.labels.push(date_string.slice(3)); //Removes day of week from DateString.
            dataset_year.datasets.data.push(baby_data[i]);
    }

    return dataset_year;
}

function addLineChart(baby){
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
                //Pass this the baby object weight array and weight_date array
    const data = setGraphDataYear(baby.weight, baby.weight_time); // Change this to the real baby object once connected.
    // ^ Can also change this to be height instead of weight.
    // Will Render the chart in the whatever view this is added to.
    return(<LineChart
        data={data}
        width={screenWidth}
        height={220} // May need to adjust this.
        chartConfig={chartConfig}
    />)
}
