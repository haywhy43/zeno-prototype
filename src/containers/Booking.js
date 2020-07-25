import React, {useState} from 'react';
import Layout from '../layout/Default';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomNav from '../components/BottomNav';
import {Link} from 'react-router-native';

const Booking = () => {
  const [from, setFrom] = useState('Select From');
  const [to, setTo] = useState('Select to');
  return (
    <Layout title="Booking">
      <View style={styles.container}>
        <View style={styles.top_section}>
          <View style={styles.indicator}>
            <View style={styles.green}></View>
            <View style={styles.line}></View>
            <View style={styles.red}></View>
          </View>
          <View style={styles.form}>
            <TextInput
              style={{
                height: 38,
                borderColor: '#D5D5D3',
                borderWidth: 1.5,
                width: '100%',
                color: '#838485',
                fontSize: 15,
                paddingLeft: 15,
              }}
              value={from}
              onChangeText={(text) => setFrom(text)}
              clearTextOnFocus
            />
            <TextInput
              style={{
                height: 38,
                borderColor: '#D5D5D3',
                borderWidth: 1.5,
                width: '100%',
                marginTop: 10,
                color: '#838485',
                fontSize: 15,
                paddingLeft: 15,
              }}
              value={to}
              onChangeText={(text) => setTo(text)}
              clearTextOnFocus
            />
            <View style={styles.buttons}>
              <Link to="/select-booking" style={styles.btn_blue}>
                <Text style={styles.btn_text}>LEAVE NOW</Text>
              </Link>

              <Link to="/leave" style={styles.btn_red}>
                <Text style={styles.btn_text}>SCHEDULE</Text>
              </Link>
            </View>
          </View>
        </View>

        <View style={styles.mid_section}>
          <View style={styles.items}>
            <View style={styles.item_inner}>
              <Image source={require('../assets/img/home-sec.png')} />
              <Text style={styles.item_text}>Add Home</Text>
            </View>
            <Image source={require('../assets/img/right-arrow.png')} />
          </View>
          <View style={styles.items}>
            <View style={styles.item_inner}>
              <Image source={require('../assets/img/suitcase.png')} />
              <Text style={styles.item_text}>Add Work</Text>
            </View>
            <Image source={require('../assets/img/right-arrow.png')} />
          </View>
          <View style={styles.items}>
            <View style={styles.item_inner}>
              <Image source={require('../assets/img/star.png')} />
              <Text style={styles.item_text}>Saved Places</Text>
            </View>
            <Image source={require('../assets/img/right-arrow.png')} />
          </View>
          <View style={styles.items}>
            <View style={styles.item_inner}>
              <Image source={require('../assets/img/pin.png')} />
              <Text numberOfLines={1} style={styles.item_text}>
                19a Billion dollar Avenue, off million road. Life dh
              </Text>
            </View>
          </View>
        </View>
      </View>
      <BottomNav />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  top_section: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },

  indicator: {
    alignItems: 'center',
    paddingLeft: 20,
    width: '20%',
    justifyContent: 'center',
  },

  green: {
    backgroundColor: '#01B804',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  line: {
    height: 60,
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

  form: {
    width: '95%',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btn_blue: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#16B6ED',
  },
  btn_text: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: '600',
  },
  btn_red: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#F36C60',
  },

  mid_section: {
    marginTop: 25,
  },

  items: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  item_inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item_text: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
    color: '#676867',
    width: '85%'
  },
});

export default Booking;
