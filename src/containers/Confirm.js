import React, {useState} from 'react';
import Layout from '../layout/Default';
import BottomNav from '../components/BottomNav';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import RadioButton from '../components/RadioButton';
import {Link} from 'react-router-native';

const methods = ['Debit Card', 'Voucher PIN', 'Other'];

const Confirm = (props) => {
  const [selected, setSelected] = useState('Debit Card');
  const [value, setValue] = useState('');
  return (
    <Layout title="Confirm Booking">
      <View>
        <View style={styles.header}>
          <Text style={{fontSize: 16, color: '#FFFFFF'}}>TRIP FARE</Text>
          <Text style={{fontSize: 32, color: '#FFFFFF', fontWeight: '700'}}>
            N{props.match.params.amount}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 25,
            color: '#424445',
          }}>
          Choose Payment Method
        </Text>
        <View style={styles.method}>
          {methods.map((method) => (
            <TouchableHighlight
              key={method}
              underlayColor=""
              onPress={() => setSelected(method)}
              style={{marginTop: 7, marginBottom: 7}}>
              <RadioButton label={method} pressed={selected === method} />
            </TouchableHighlight>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 30,
          }}>
          <Text style={{fontSize: 17, color: '#424445'}}>Enter Promo Code</Text>
          <TextInput
            style={{
              height: 35,
              borderColor: '#D5D5D3',
              borderWidth: 1.5,
              width: '40%',
              color: '#838485',
              fontSize: 15,
              paddingLeft: 15,
              marginLeft: 15,
            }}
            value={value}
            onChangeText={(text) => setValue(text)}
            clearTextOnFocus
          />
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Link to="/complete" style={styles.btn_blue}>
            <Text style={styles.btn_text}>PAY</Text>
          </Link>
        </View>
      </View>
      <BottomNav />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16B6ED',
  },

  method: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#E5E5E8',
    borderBottomColor: '#E5E5E8',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
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

export default Confirm;
