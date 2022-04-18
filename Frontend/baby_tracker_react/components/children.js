import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

const Childrencomponent = (props) => (
  <Card style={{backgroundColor:"#406882"}}>
    <Card.Title title= {props.cardtitle} subtitle={props.cardsub} left={LeftContent} />
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.Content}</Paragraph>
    </Card.Content>
    <Card.Cover source={require("../assets/babycomp.png")} />
    <Card.Actions>
      <Button>Details</Button>
    </Card.Actions>
  </Card>
);

export default Childrencomponent;