import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CardRiwayat({detail, name, time}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        <Text style={styles.textUp}>{detail}</Text>
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  inner: {
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  textUp: {
    marginTop: 20,
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  content: {
    marginTop: 15,
    marginBottom: 10,
  },
});
