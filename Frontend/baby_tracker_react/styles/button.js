import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function FlatButton({text, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>

    )}

    const styles = StyleSheet.create({
        button: {
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 20,
            backgroundColor: 'white'
        },
        buttonText: {
            color: 'black',
            fontSize: 18,
            textAlign: 'center', 
            fontFamily: 'Noteworthy',
            fontWeight: 'bold',
        }
      });