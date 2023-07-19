import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const NavButton = ({img, label, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onPress}
      onPressIn={onPress}>
      <Image source={img} style={styles.img} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  wrapper: {
    zIndex:20,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  img: {
    marginRight: 15,
    width: 20,
    height: 20,
  },
});
