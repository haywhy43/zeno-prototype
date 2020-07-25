import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Layout = ({children, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_nav}>
        <View style={styles.menu}>
          <View style={styles.menu_item}></View>
          <View style={styles.menu_item}></View>
          <View style={styles.menu_item}></View>
        </View>
        <Text style={styles.nav_text}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    position: 'relative',
  },

  top_nav: {
    display: 'flex',
    backgroundColor: Colors.black,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },

  menu: {
    marginLeft: 20,
    marginRight: 28,
    marginBottom: 3,
  },

  menu_item: {
    width: 23,
    height: 1.5,
    backgroundColor: '#16B6ED',
    marginTop: 5,
  },

  nav_text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Layout;
