import * as React from 'react';
import { List } from 'react-native-paper';
import Colors from '../styles/colors';

const Childstatlist = () => (
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

export default Childstatlist;