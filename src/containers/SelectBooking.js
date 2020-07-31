import React, {useState} from 'react';
import Layout from '../layout/Default';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Link} from 'react-router-native';
import Map from '../components/Map';
import providers from '../utils/provider';

const SelectBooking = ({match, history}) => {
  const [data, setData] = useState({});
  const [prov, setProv] = useState(providers);

  const searchProviders = (param) => {
    let newProv = providers.filter((val) => {
      let innerArr = val.transport.filter((trans) =>
        trans.name.toLowerCase().includes(param.toLowerCase()),
      );
      if (innerArr.length) {
        return true;
      } else {
        return false;
      }
    });

    setProv(newProv);
  };

  const sortProviders = (param) => {};

  return (
    <Layout title="Select Booking">
      <View>
        <Map
          from={match.params.from}
          to={match.params.to}
          ready={(e) => setData(e)}
          history={history}
        />
        <View style={styles.details}>
          <View style={styles.detail}>
            <Image source={require('../assets/img/distance.png')} />
            <Text style={styles.detail_text}>{data.distance}km</Text>
          </View>
          <View style={styles.detail}>
            <Image source={require('../assets/img/car.png')} />
            <Text style={styles.detail_text}>Good</Text>
          </View>
          <View style={styles.detail}>
            <Image source={require('../assets/img/cloud.png')} />
            <Text style={styles.detail_text}>Cloudy</Text>
          </View>
          <View style={styles.detail}>
            <Image source={require('../assets/img/map.png')} />
            <Text style={styles.detail_text} numberOfLines={1}>
              {match.params.from}
            </Text>
          </View>
        </View>
        <View style={styles.form}>
          <TextInput
            style={{
              width: '40%',
              height: 35,
              padding: 0,
              borderBottomColor: '#7B8C93',
              borderBottomWidth: 1,
              fontSize: 12,
            }}
            placeholder={'Search Service Provider'}
            onChangeText={(text) => searchProviders(text)}
          />
          <Text
            style={{
              fontSize: 14,
              color: '#424445',
              marginLeft: 25,
              paddingBottom: 2,
            }}>
            Sort By: Lowest Price
          </Text>
        </View>
        {prov.map((provider, i) => (
          <View style={styles.service} key={provider.total * i}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <View style={styles.indicator}>
                  <View style={styles.green}></View>
                  <View style={styles.line}></View>
                  <View style={styles.yellow}></View>
                  <View style={styles.line}></View>
                  <View style={styles.red}></View>
                </View>
              </View>
              <View style={{marginLeft: 15}}>
                {provider.transport.map((trans, i) => (
                  <View style={styles.service_item} key={i}>
                    <Image
                      source={require('../assets/img/' + 'bus-new' + '.png')}
                      style={{marginRight: 7}}
                    />
                    <Text
                      style={{marginRight: 7, fontSize: 16, color: '#424445'}}>
                      {trans.name}
                    </Text>
                    <Image source={require('../assets/img/pen.png')} />
                  </View>
                ))}
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 20}}>
                {provider.transport.map((trans, i) => (
                  <View style={styles.service_item}>
                    <Text style={{color: '#424445'}}>
                      N{trans.amount || ' / A'}
                    </Text>
                  </View>
                ))}
              </View>
              <View>
                <View style={styles.service_item}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: '#424445', fontWeight: '600'}}>
                      Total
                    </Text>
                    <Text style={{color: '#424445'}}> N{provider.total}</Text>
                  </View>
                </View>
                <View style={styles.service_item}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: '#424445', fontWeight: '600'}}>
                      ETA
                    </Text>
                    <Text style={{color: '#424445', paddingLeft: 15}}>
                      {provider.duration || 'N / A'}
                    </Text>
                  </View>
                </View>
                <View style={styles.service_item}>
                  <Link
                    to={`/trip-details/${i}`}
                    style={styles.btn}
                    underlayColor="#6796B4">
                    <Text style={{fontSize: 12, color: '#FFFFFF'}}>BOOK</Text>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 23,
    paddingRight: 23,
  },

  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  detail_text: {
    fontSize: 10,
    marginLeft: 4,
    opacity: 0.7,
    color: '#424445',
    maxWidth: 100,
  },

  form: {
    paddingLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  service: {
    borderTopColor: '#16B6ED',
    borderTopWidth: 25,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  indicator: {
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'center',
  },

  green: {
    backgroundColor: '#01B804',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  line: {
    height: 25,
    width: 1,
    backgroundColor: '#E5E5E8',
    marginTop: 3,
    marginBottom: 3,
  },
  red: {
    backgroundColor: '#F50101',
    width: 10,
    height: 10,
    borderRadius: 50,
  },

  yellow: {
    backgroundColor: '#F2A301',
    width: 10,
    height: 10,
    borderRadius: 50,
  },

  service_item: {
    flexDirection: 'row',
    marginBottom: 23,
    alignItems: 'center',
    marginTop: -3.5,
  },

  btn: {
    backgroundColor: '#7B8C93',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 4,
  },
});

export default SelectBooking;
