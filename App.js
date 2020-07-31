/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import Services from './src/containers/Services';
import Home from './src/containers/Home';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NativeRouter, Route} from 'react-router-native';
import Booking from './src/containers/Booking';
import SelectBooking from './src/containers/SelectBooking';
import TripDetails from './src/containers/TripDetails';
import Confirm from './src/containers/Confirm';
import Complete from './src/containers/Complete';

const {width, height} = Dimensions.get('window');
const App = () => {
  return (
    <>
      <StatusBar color="#000000" />
      <NativeRouter>
        <SafeAreaView>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            alwaysBounceVertical
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <Home /> */}
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/booking" component={Booking} />
            <Route path="/select-booking/:from/:to" component={SelectBooking} />
            <Route path="/trip-details/:index" component={TripDetails} />
            <Route path="/confirm/:amount" component={Confirm} />
            <Route path="/complete" component={Complete} />
          </ScrollView>
        </SafeAreaView>
      </NativeRouter>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.black,
  },
});

export default App;
