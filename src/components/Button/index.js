import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({label, width, onPress}) {
  return (
    <TouchableOpacity style={styles.wrapper(width)} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: width => ({
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#18AB00',
    width: width,
  }),
  label: {
    textAlign: 'center',
    color: 'white',
  },
});
