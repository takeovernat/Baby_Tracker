import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Colors from '../styles/colors';
const Header = (props) => (
    <Appbar.Header style={{backgroundColor:Colors.seconary}} dark={false}>
       <Appbar.Content   title={props.title} subtitle={props.subtitle} />
    </Appbar.Header>
);

export default Header;