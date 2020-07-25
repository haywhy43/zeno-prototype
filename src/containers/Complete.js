import React from 'react';
import Layout from '../layout/Default';
import BottomNav from '../components/BottomNav';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import {Link} from 'react-router-native';

const Complete = () => {
  return (
    <Layout title="Payment Status">
      <View style={styles.container}>
        <View style={styles.checkmark}>
          <Image source={require('../assets/img/check.png')} />
        </View>
        <Text style={styles.title}>Payment Successful</Text>
        <Text style={styles.sub_text}>
          Thank you. Your Payment has been successful. A confirmation email has
          been sent to john.doe@zeno.ng
        </Text>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Link to="/services" style={styles.btn_blue}>
            <Text style={styles.btn_text}>FINISH</Text>
          </Link>
        </View>
      </View>
      <BottomNav />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
  },
  checkmark: {
    padding: 10,
    backgroundColor: '#16B6ED',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 25,
  },

  sub_text: {
    width: Dimensions.get('window').width / 1.25,
    textAlign: 'center',
    marginTop: 15,
  },

  btn_blue: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 38,
    paddingRight: 38,
    backgroundColor: '#16B6ED',
  },

  btn_text: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default Complete;
