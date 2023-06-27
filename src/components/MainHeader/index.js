import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ar from '../../assets/images/arr.png';

const MainHeader = ({label, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        <Image source={ar} style={styles.ar} />
      </TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    height: 54,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  ar: {
    marginRight: 15,
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 14,
    color: '#000000',
  },
});
