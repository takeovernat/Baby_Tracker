import * as React from 'react';
import { List } from 'react-native-paper';
import Colors from '../styles/colors';

const Childstatlist = (props) => {
  if(props.children === undefined)
  {
    return(
      <List.Section style={{backgroundColor:"white"}}>
        <List.Subheader >This weeks' stats for John Doe</List.Subheader>
        <List.Item title="Daily calorie intake          1400 calories" left={() => <List.Icon icon="food-apple" />} />
        <List.Item
          title="Bowel Movement             3/day"
          left={() => <List.Icon color="#000" icon="emoticon-poop" />}
        />
        <List.Item title="Water intake                  1 gallon/day" left={() => <List.Icon icon="cup-water" />} />
        
      </List.Section>
    );
  }
  else{
    return (
      <List.Section style={{backgroundColor: '#406882'}}>
        <List.Item title={"Age:\t\t\t\t\t\t"+props.children.age_months} left={() => <List.Icon icon="baby" />}/> 
        <List.Item title={"Daily calories:\t\t\t  "+props.children.daily_calories} left={() => <List.Icon icon="baby-bottle" />}/> 
        <List.Item title={"Diaper change:\t\t\t\t"+props.children.diaper_change_soft} left={() => <List.Icon icon="human-baby-changing-table" />}/> 
        <List.Item title={"Water Intake:\t\t\t\t"+props.children.water_intake_cups} left={() => <List.Icon icon="cup-water" />}/> 
        <List.Item title={"Last updated at: "+props.children.record}/> 
      
      </List.Section>
    )
  }
  }

export default Childstatlist;