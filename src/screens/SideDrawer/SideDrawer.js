import React,{Component} from 'react';
import {View,
        Text,
        Dimensions,
        StyleSheet,
        TouchableOpacity,
        Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'



class SideDrawer extends Component {

    render(){
        return(            
            <View 
                style={[styles.container,
                    {width:Dimensions.get("window").width * 0.8 }
                ]}>
                <TouchableOpacity onPress={() => this.props.navigator.switchToTab({tabIndex: 2})}>
                    <View style={styles.drawerItem}>
                        <Icon name ={Platform.OS === 'android'? "md-log-out" : "ios-log-out"}
                              size={30} 
                              color="red" 
                              style={styles.drawerItemIcon}/>
                        <Text>Sign Out Foobar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.switchToTab({tabIndex: 0})} >
                    <View style={styles.drawerItem}>
                        <Icon name ={Platform.OS === 'android'? "md-log-out" : "ios-log-out"}
                              size={30} 
                              color="red" 
                              style={styles.drawerItemIcon}/>
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 50,
        backgroundColor: 'white',
        flex: 1
    },
    drawerItem:{
        flexDirection: "row",
        alignItems: 'center',
        padding:10,
        backgroundColor:"#eee"

    },
    drawerItemIcon:{
       marginRight:10, 
    }
})

export default SideDrawer;