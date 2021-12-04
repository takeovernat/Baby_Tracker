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