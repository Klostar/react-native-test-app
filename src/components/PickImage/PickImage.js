import React from 'react';
import {View,Image,Button, StyleSheet} from 'react-native'
import imagePlaceHolder from "../../assets/beautiful-place.jpg";

class PickImage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.placeholder}>
                <Image source={imagePlaceHolder} style={styles.previewImage} />
              </View>
              <View style={styles.button}>
                <Button title="Pick Image" onPress={() =>('Alert') }/>
              </View>
              </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        width:'100%',
        alignItems: 'center'
    },
    placeholder:{
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: 200,
        height:200
    },
    button:{
        margin:8,

    },
    previewImage:{
        height:"100%",
        width:"100%"
    }

})

export default PickImage;