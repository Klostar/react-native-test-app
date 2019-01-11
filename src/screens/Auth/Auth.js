import React,{Component} from 'react';
import {View,Text,Button,TextInput,StyleSheet,ImageBackground} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../..//components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import ButtonBackground from'../../components/UI/Button/ButtonBackground'
import backgroundImage from '../../assets/background.jpg'

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
            
                <MainText>
                    <HeadingText>Please Log In </HeadingText>
                </MainText>
                    <ButtonBackground color="#ffa500">Switch To Log In</ButtonBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your Email Address" style={styles.input}/>
                        <DefaultInput placeholder="Password"  style={styles.input} />
                        <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                    </View>
                    <ButtonBackground color="#ffa500" onPress={this.loginHandler}>Submit</ButtonBackground>
                 
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    inputContainer:{
        width:"80%"
    },
    input:{
        backgroundColor:'#eee',
        borderColor: '#bbb'
    },
    backgroundImage:{
        width: "100%",
        flex:1
    }
});

export default AuthScreen;