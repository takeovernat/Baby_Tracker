import * as React from 'react';
import { List } from 'react-native-paper';

const Childstatlist = () => (
  <List.Section style={{backgroundColor:"white"}}>
    <List.Subheader >This weeks' stats for John Doe</List.Subheader>
    <List.Item title="Daily calorie intake " left={() => <List.Icon icon="food-apple" />} />
    <List.Item
      title="Bowel Movement"
      left={() => <List.Icon color="#000" icon="emoticon-poop" />}
    />
    <List.Item title="Water intake" left={() => <List.Icon icon="cup-water" />} />
    
  </List.Section>
);

export default Childstatlist;