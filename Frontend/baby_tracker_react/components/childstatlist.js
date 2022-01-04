import * as React from 'react';
import { List } from 'react-native-paper';

const Childstatlist = () => (
  <List.Section style={{backgroundColor:"white"}}>
    <List.Subheader >Some title</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color="#000" icon="folder" />}
    />
  </List.Section>
);

export default Childstatlist;