import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ?"md-map" : 'ios-map', 30),
        Icon.getImageSource(Platform.OS === 'android'? "md-share-alt":"ios-share",30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu":"ios-menu", 30),
        Icon.getImageSource(Platform.OS === 'android'? "md-home" : "ios-home",30)

    ]).then(sources =>{
        Navigation.startTabBasedApp({
            tabs:[
                {
                screen: "test-react-app.HomeScreen",
                label: "HomeScreen",
                title: "HomeScreen",
                icon: sources[3],
                navigatorButtons:{
                        leftButtons:[
                            {
                                icon:sources[2],
                                title:"Menu",
                                id:"sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "test-react-app.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:sources[2],
                                title:"Menu",
                                id:"sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "test-react-app.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:sources[2],
                                title:"Menu",
                                id:"sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer:{
                left:{
                    screen:"test-react-app.SideDrawer"
                }
            }
        });
    });
};

export default startTabs;