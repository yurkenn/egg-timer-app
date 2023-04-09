import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors } from '../ui/Colors';
import { Ionicons } from '@expo/vector-icons';

const EggIcon = ({ handlePress, isSelected, text }) => {
  return (
    <View>
      <TouchableHighlight
        style={[styles.item, { backgroundColor: isSelected ? Colors.yellow : Colors.white }]}
        onPress={handlePress}
        underlayColor={Colors.white}
      >
        <View style={styles.container}>
          <Ionicons name="egg-outline" size={50} color={Colors.black} />
          <Text style={styles.eggText}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default EggIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 100,
    width: 100,
  },
  item: {
    borderRadius: 5,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eggText: {
    fontSize: 20,
    textAlign: 'center',
  },
  eggIcon: {
    fontSize: 50,
  },
  image: {
    flex: 1,
    width: 40,
    height: 40,
  },
});
