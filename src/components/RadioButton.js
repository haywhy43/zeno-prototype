import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const RadioButton = ({pressed, label}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          ...styles.outer_circle,
          borderColor: pressed ? '#009688' : '#757575',
        }}>
        <View
          style={{
            ...styles.inner_circle,
            display: pressed ? 'flex' : 'none',
          }}></View>
      </View>

      <Text style={{marginLeft: 10, fontSize: 16}}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outer_circle: {
    position: 'relative',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inner_circle: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#009688',
  },
});

export default RadioButton;
