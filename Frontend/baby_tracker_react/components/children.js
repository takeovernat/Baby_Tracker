import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

const Childrencomponent = (props) => (
  <Card>
    <Card.Title title= {props.cardtitle} subtitle={props.cardsub} left={LeftContent} />
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.Content}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Details</Button>
    </Card.Actions>
  </Card>
);

export default Childrencomponent;