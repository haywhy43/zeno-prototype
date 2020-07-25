import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NativeRouter, Route, Link} from 'react-router-native';

const {width, height} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Zeno</Text>
      <Link to="/services" underlayColor="#f0f4f7" style={styles.btn}>
        <Text style={{color: Colors.white, fontSize: 14}}>LOGIN</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.black,
  },

  body: {
    backgroundColor: Colors.black,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height,
  },

  text: {
    color: Colors.white,
    fontSize: 84,
  },

  btn: {
    color: Colors.white,
    backgroundColor: '#16B6ED',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 15,
  },
});

export default Home;
