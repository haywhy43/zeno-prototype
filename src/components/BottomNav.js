import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const BottomNav = () => {
  return (
    <View style={styles.bottom_nav}>
      <View style={styles.wrapper}>
        <Image source={require('../assets/img/home.png')} />
        <Text style={styles.bottom_nav_text}>Home</Text>
      </View>
      <View style={styles.wrapper}>
        <Image source={require('../assets/img/phone-book.png')} />
        <Text style={styles.bottom_nav_text}>History</Text>
      </View>
      <View style={styles.wrapper}>
        <Image source={require('../assets/img/user.png')} />
        <Text style={styles.bottom_nav_text}>Profile</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottom_nav: {
    height: 65,
    width: '100%',
    backgroundColor: '#00B9E6',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  bottom_nav_text: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: '600',
    marginTop: 4,
  },

  wrapper: {
    alignItems: 'center',
  },
});

export default BottomNav;
