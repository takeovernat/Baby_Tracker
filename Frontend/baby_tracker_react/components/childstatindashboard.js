import * as React from 'react';
import { List } from 'react-native-paper';
import Colors from '../styles/colors';

const Childstatindashboard = (props) => {  
    console.log("in childststdash ", props)
    return (

      <List.Section style={{backgroundColor: '#406882'}}>
        <List.Item title={"Daily calories:\t\t\t  "+props.childrenstat.daily_calories} left={() => <List.Icon icon="baby-bottle" />}/> 
        <List.Item title={"Diaper change:\t\t\t\t"+props.childrenstat.diaper_change_soft + props.childrenstat.diaper_change_hard } left={() => <List.Icon icon="human-baby-changing-table" />}/> 
        <List.Item title={"Water Intake:\t\t\t\t"+props.childrenstat.water_intake_cups} left={() => <List.Icon icon="cup-water" />}/> 
        <List.Item title={"Sleep time:\t\t\t\t"+props.childrenstat.sleep_time} left={() => <List.Icon icon="cup-water" />}/> 
        <List.Item title={"Last updated at: "+props.childrenstat.record}/> 
      
      </List.Section>
    )

  }

export default Childstatindashboard;