import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';


import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import HomeScreen from './src/screens/HomeScreen/HomeScreen'

import configStore from './src/store/configStore';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configStore();


//register screens

Navigation.registerComponent("test-react-app.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("test-react-app.SharePlaceScreen", () => SharePlaceScreen, store, Provider)
Navigation.registerComponent("test-react-app.FindPlaceScreen", () => FindPlaceScreen, store, Provider)
Navigation.registerComponent("test-react-app.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider)
Navigation.registerComponent("test-react-app.HomeScreen", () => HomeScreen, store, Provider)
Navigation.registerComponent("test-react-app.SideDrawer", () => SideDrawer)
//start an app
Navigation.startSingleScreenApp({
  screen:{
    screen:"test-react-app.AuthScreen",
    title:"Login"
  }
})
