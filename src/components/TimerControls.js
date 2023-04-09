import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../ui/Colors';

const TimerControls = ({ isPlaying, handlePlay, handlePause, handleStop, handleReset }) => {
  return (
    <View style={styles.player}>
      {!isPlaying ? (
        <TouchableOpacity onPress={handlePlay}>
          <AntDesign name="caretright" size={30} color="black" />
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity onPress={handlePause}>
            <Ionicons name="ios-pause-sharp" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStop}>
            <Ionicons name="stop" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleReset}>
            <MaterialCommunityIcons name="restart" size={30} color="black" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default TimerControls;

const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 15,
    margin: 20,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
