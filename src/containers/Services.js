import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Link} from 'react-router-native';

const {width, height} = Dimensions.get('window');

const services = [
  {
    title: 'Zeno Lyte',
    desc: 'I take you from your pick up point to nearest junction /bus stop',
    link: '/',
  },
  {
    title: 'Zeno Shuttle',
    desc:
      'I take you from the closest bus stop to your pick up point to the main bus stop',
    link: '/',
  },
  {
    title: 'Zeno Car',
    desc:
      'I provide ride hailing service with an option to share the cost with other riders',
    link: '/',
  },
  {
    title: 'Zeno Bus',
    desc: 'I provide a schedule and route based bus service',
    link: '/',
  },
  {
    title: 'Zeno Intermodal',
    desc:
      'I connect you to multiple forms of transportation to plan your journey.',
    link: '/booking',
  },
];

const Services = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
        <View>
          <Text style={styles.text}>Choose a Service</Text>
        </View>

        <View style={styles.services}>
          {services.map((service) => (
            <Link to={service.link} style={styles.service} key={service.title}>
              <View style={styles.service_inner}>
                <View style={styles.service_img_container}>
                  <Image
                    style={styles.service_img}
                    source={require('../assets/img/bus.png')}
                  />
                </View>
                <View style={styles.divider}></View>
                <View style={styles.content}>
                  <View>
                    <Text style={styles.title}>{service.title}</Text>
                    <Text style={styles.content_text}>{service.desc}</Text>
                  </View>
                </View>
              </View>
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    // flex: 1,
    resizeMode: 'contain',
    marginLeft: 25,
  },

  container: {
    display: 'flex',
    height: height + 100,
    backgroundColor: Colors.white,
  },

  image_container: {
    marginTop: 80,
  },

  text: {
    fontSize: 22,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: -18,
  },

  services: {
    marginTop: 25,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  service: {
    padding: 20,
    display: 'flex',
    backgroundColor: Colors.black,
    borderRadius: 10,
    marginTop: 15,
    height: 83,
    width: width / 1.14,
    margin: 'auto',
  },

  service_inner: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },

  service_img: {
    resizeMode: 'contain',
  },

  divider: {
    height: 40,
    width: 1,
    backgroundColor: Colors.white,
    marginLeft: 10,
    marginRight: 10,
    opacity: 0.2,
  },

  content: {
    width: width / 1.8,
  },

  title: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '900',
  },

  content_text: {
    color: Colors.white,
    fontSize: 11,
    marginTop: 1,
  },
});

export default Services;
