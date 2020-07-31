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
  return (
    <Layout title="Trip Details">
      <View>
        <Image source={require('../assets/img/map-details.png')} />
        <View style={styles.top}>
          <Text style={styles.text}>14/08/19, 9:00AM</Text>
          <Text style={styles.text}>N2,850</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.detail_inner}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/img/bicycle.png')}
                style={{marginRight: 10}}
              />
              <Text style={styles.text}>Max</Text>
            </View>
            <Text style={styles.text}>10km</Text>
            <Text style={styles.text}>N500</Text>
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
                <Text style={styles.text_sm}>10 John Street, Ikorodu</Text>
              </View>
              <View style={styles.text_container}>
                <Text style={styles.text_sm}>Ikorodu Garage Bus Stop</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detail_inner}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/img/bus-new.png')}
                style={{marginRight: 10, marginLeft: 5}}
              />
              <Text style={styles.text}>BRT</Text>
            </View>
            <Text style={styles.text}>45km</Text>
            <Text style={styles.text}>N/A</Text>
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
                <Text style={styles.text_sm}>Ikorodu Garage Bus Stop</Text>
              </View>
              <View style={styles.text_container}>
                <Text style={styles.text_sm}>TBS BRT Bus Stop</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detail_inner}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/img/bicycle.png')}
                style={{marginRight: 10}}
              />
              <Text style={styles.text}>Max</Text>
            </View>
            <Text style={styles.text}>15km</Text>
            <Text style={styles.text}>N500</Text>
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
                <Text style={styles.text_sm}>TBS BRT Bus Stop</Text>
              </View>
              <View style={styles.text_container}>
                <Text style={styles.text_sm}>20 Fola Osibo St. Lekki</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.btn_blue}
            underlayColor=""
            onPress={() => {
              props.history.goBack()
            }}>
            <Text style={styles.btn_text}>BACK</Text>
          </TouchableHighlight>
          <Link to="/confirm" style={{...styles.btn_blue, marginLeft: 20}}>
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
