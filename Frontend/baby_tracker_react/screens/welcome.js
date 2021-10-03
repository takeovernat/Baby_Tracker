
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navstack from "../navigation";

const welcomescreen = ({ navigation }) => {
    const [cool, setcool] = useState("false");
    const hi = "nig"
    return (
        <View>
            <Text>hello welcs</Text>
            <Button
                title="login"
                onPress={() =>
                navigation.navigate('login', { name: 'Jane',state: cool, changestate: setcool, mess: hi })
                }
            />
      </View>
    );
  };

  export default welcomescreen;