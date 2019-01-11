import React,{ Component } from 'react';
import {View, 
    Text, 
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Image} 
    from 'react-native';
import {connect} from 'react-redux';
import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';



class SharePlaceScreen extends Component{
    state={
        placeName:" "
    }

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event =>{
        if(event.type=== "NavBarButtonPress"){
            if(event.id==="sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side:"left"
                })
            }
        }
        
    }

    placeNameChangedHandler = value =>{
        this.setState({
            placeName: value
        });
    }

    placeAddedHanlder = () =>{
        if(this.state.placeName.trim() !==""){
             this.props.onAddPlace(this.state.placeName)
        }
    }
    render(){
        return(
          
            <ScrollView>
            <View style={styles.container}>
              <MainText>
                <HeadingText>Share a Place with us!</HeadingText>
                </MainText>
                <PickImage/>
                <PickLocation />
                <PlaceInput  
                    placeName={this.state.placeName} 
                    onChangeText={this.placeNameChangedHandler}
                />
                <View style={styles.button}>
                <Button title="Share the Place!" onPress={this.placeAddedHanlder}/>
              </View>
            </View>
          </ScrollView>
        );
      }
    }


const mapDispatchToProps = dispatch => {
    return{
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

const styles= StyleSheet.create({
    container:{
        alignItems:"center",
        flex:1
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
export default connect(null,mapDispatchToProps)(SharePlaceScreen); 