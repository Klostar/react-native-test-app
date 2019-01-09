import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView} from "react-native";
import {connect} from 'react-redux';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import {addPlace,deletePlace,selectPlace,deselectPlace} from './src/store/actions/index';


class App extends Component {
 
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
   this.props.onDeletePlace();
  };

  onModalClosedHandler = () => {
    this.props.onDeselectPlace();
  };
  
  placeSelectedHandler = key => {
   this.props.onSelectPlace(key);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <PlaceDetail 
        selectedPlace ={this.props.selectedPlace} 
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.onModalClosedHandler}
      />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStatetoProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStatetoProps,mapDispatchToProps)(App);