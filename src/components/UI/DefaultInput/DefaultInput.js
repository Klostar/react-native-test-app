import React from 'react';
import {TextInput,StyleSheet} from 'react-native'
 

const defaultInput = props => (
    <TextInput 
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.textInput,props.style]} 
    />
)

const styles = StyleSheet.create({
 textInput:{
        width:"100%",
        borderWidth: 1,
        borderColor:"#eee",
        padding: 5,
        margin: 8
     }
});



export default defaultInput;