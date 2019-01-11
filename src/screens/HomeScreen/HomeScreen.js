import React from 'react';
import {View,Text} from 'react-native';

class HomeScreen extends React.Component{
    //this is what renders the side drawer on each page
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
    render(){
        return(
                <View>
                    <Text>HomeScreen</Text>
                </View>
        );
    }
}

export default HomeScreen;