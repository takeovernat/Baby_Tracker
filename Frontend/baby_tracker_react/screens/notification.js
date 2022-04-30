import React from "react"
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const Notification = ()=>{

    return (
      <View style={{marginTop:0}}>
    <Card containerStyle={{padding: 0}} >

        <ListItem
          key='1'
          title="demo notification"
          leftAvatar={{ source: { uri: "https://image.similarpng.com/very-thumbnail/2020/08/Youtube-notification-bells-Unread-Clipart-PNG.png"}  }}
        />
        
    
</Card>

    <Card containerStyle={{padding: 0 }} >
        <ListItem
          key='1'
          title="demo notification"
          leftAvatar={{ source: { uri: "https://image.similarpng.com/very-thumbnail/2020/08/Youtube-notification-bells-Unread-Clipart-PNG.png"}  }}
          Text="hello"
        />
        
    
</Card>
    <Card containerStyle={{padding: 0 }} >
        <ListItem
          key='1'
          title="demo notification"
          leftAvatar={{ source: { uri: "https://image.similarpng.com/very-thumbnail/2020/08/Youtube-notification-bells-Unread-Clipart-PNG.png"}  }}
          Text="hello"
        />
        
    
</Card>
    <Card containerStyle={{padding: 0 }} >
        <ListItem
          key='1'
          title="demo notification"
          leftAvatar={{ source: { uri: "https://image.similarpng.com/very-thumbnail/2020/08/Youtube-notification-bells-Unread-Clipart-PNG.png"}  }}
          Text="hello"
        />
        
    
</Card>


</View>
);

}

export default Notification;