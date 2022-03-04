import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Colors from '../styles/colors';
import { StyleSheet } from 'react-native';
const Header = (props) => (
    <Appbar.Header style={{backgroundColor:'black'}} dark={true} > 
       <Appbar.Content titleStyle={styles.fonty} subtitleStyle={styles.fonty}  title={props.title} subtitle={props.subtitle} />
    </Appbar.Header>
);

export default Header;

const styles = StyleSheet.create({

    fonty: {
      fontFamily: "Academy Engraved LET",
    }


  });