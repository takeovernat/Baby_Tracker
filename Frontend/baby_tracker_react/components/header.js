import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Colors from '../styles/colors';
const Header = () => (
    <Appbar.Header style={{backgroundColor:Colors.seconary}} dark={false}>
       <Appbar.Content   title="Welcome Ron" subtitle={'last log on 09/10/2021'} />
    </Appbar.Header>
);

export default Header;