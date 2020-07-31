import React, {useState} from 'react';
import Layout from '../layout/Default';
import BottomNav from '../components/BottomNav';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Link} from 'react-router-native';
import provider from '../utils/provider';

const TripDetails = (props) => {
  const [prov, setProvider] = useState(provider[props.match.params.index]);
  const date = new Date()
  return (
    <Layout title="Trip Details">
      <View>
        <Image source={require('../assets/img/map-details.png')} />
        <View style={styles.top}>
          <Text style={styles.text}>{date.getDate()}/{date.getMonth() +1}/{date.getFullYear()}, {date.getHours()}:{date.getMinutes()}</Text>
          <Text style={styles.text}>N{prov.total}</Text>
        </View>
        {prov.transport.map((trans) => (
          <View style={styles.detail} key={trans.slug}>
            <View style={styles.detail_inner}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/img/bicycle.png')}
                  style={{marginRight: 10}}
                />
                <Text style={styles.text}>{trans.name}</Text>
              </View>
              <Text style={styles.text}>{trans.distance}km</Text>
              <Text style={styles.text}>N{trans.amount || ' / A'}</Text>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <View style={styles.indicator}>
                <View style={styles.green}></View>
                <View style={styles.line}></View>
                <View style={styles.red}></View>
              </View>
              <View style={{marginLeft: 15}}>
                <View style={styles.text_container}>
                  <Text style={styles.text_sm}>{trans.start}</Text>
                </View>
                <View style={styles.text_container}>
                  <Text style={styles.text_sm}>{trans.stop}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.btn_blue}
            underlayColor=""
            onPress={() => {
              props.history.goBack();
            }}>
            <Text style={styles.btn_text}>BACK</Text>
          </TouchableHighlight>
          <Link to={`/confirm/${prov.total}`} style={{...styles.btn_blue, marginLeft: 20}}>
            <Text style={styles.btn_text}>CONFIRM</Text>
          </Link>
        </View>
      </View>
      <BottomNav />
    </Layout>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },

  text: {
    color: '#424445',
    fontSize: 15,
    fontWeight: '600',
  },

  detail: {
    borderTopColor: '#E5E5E8',
    borderTopWidth: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },

  detail_inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  green: {
    backgroundColor: '#01B804',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  line: {
    height: 15,
    width: 1,
    backgroundColor: '#E5E5E8',
    marginTop: 2,
    marginBottom: 2,
  },
  red: {
    backgroundColor: '#F50101',
    width: 10,
    height: 10,
    borderRadius: 50,
  },

  text_container: {
    marginTop: -6,
    marginBottom: 15,
  },

  text_sm: {
    fontSize: 14.45,
    color: '#424445',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
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

export default TripDetails;
