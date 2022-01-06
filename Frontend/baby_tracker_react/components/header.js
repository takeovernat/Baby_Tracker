import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => (
    <Appbar.Header>
       <Appbar.Content title="Welcome Ron" subtitle={'last log on 09/10/2021'} />
    </Appbar.Header>
);

export default Header;