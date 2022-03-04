import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

const Childrencomponent = (props) => (
  <Card style={{backgroundColor:"#FDEFF4"}}>
    <Card.Title title= {props.cardtitle} subtitle={props.cardsub} left={LeftContent} />
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.Content}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://www.nicepng.com/png/full/50-505536_adora-african-american-black-baby-doll.png' }} />
    <Card.Actions>
      <Button>Details</Button>
    </Card.Actions>
  </Card>
);

export default Childrencomponent;