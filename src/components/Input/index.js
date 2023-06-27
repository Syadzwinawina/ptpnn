import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Input({placeholder, password, label, height, labelOn,onChangeText,value}) {
  return (
    <>
      <Text style={styles.label(labelOn)}>{label}</Text>
      <View style={styles.input(height)}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          secureTextEntry={password}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: height => ({
    height: height,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 11,
  }),
  inputStyle: {
    paddingVertical: 2,
    color: 'black',
    flex: 1,
    fontSize: 10,
  },
  image: {
    width: 13,
    height: 9,
  },
  label: labelOn => ({
    display: labelOn ? 'flex' : 'none',
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'bold',
  }),
});
