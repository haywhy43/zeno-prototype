import React, {Component} from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import {View, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
class Map extends Component {
  // const;
  constructor() {
    super();

    this.state = {
      GOOGLE_API_KEY: 'AIzaSyDOfUkV0Kkpp92lKC0BaahcdG-N_m_B0Wg',
    };
  }
  render() {
    return (
      <View style={{height: 350}}>
        <MapView
          style={{height: '100%'}}
          region={{
            latitude: 6.524379,
            longitude: 3.379206,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          ref={(c) => (this.mapView = c)}
          showsUserLocation={true}>
          <MapViewDirections
            origin={this.props.from}
            destination={this.props.to}
            apikey={this.state.GOOGLE_API_KEY}
            strokeColor="blue"
            strokeWidth={6}
            onReady={(e) => {
              this.props.ready(e);
              this.mapView.fitToCoordinates(e.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
            onError={(err) => {
              this.props.history.push(`/booking?error=${err}`);
            }}
          />
        </MapView>
      </View>
    );
  }
}

export default Map;
