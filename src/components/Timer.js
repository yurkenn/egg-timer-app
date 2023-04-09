import { View, Text } from 'react-native';
import React, { useState, useRef } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Colors } from '../ui/Colors';

const Timer = ({ selectedEggSize, isPlaying }) => {
  let timerDuration =
    selectedEggSize === 'S'
      ? 180
      : selectedEggSize === 'M'
      ? 360
      : selectedEggSize === 'L'
      ? 720
      : 0;

  //how to reset timer to 0 when reset button is pressed

  return (
    <CountdownCircleTimer
      key={selectedEggSize}
      isPlaying={isPlaying}
      duration={timerDuration}
      colors={Colors.yellow}
      size={200}
      strokeWidth={20}
      onComplete={() => {
        return [false, 0];
      }}
    >
      {({ remainingTime, animatedColor }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return (
          <View>
            <Text style={{ color: Colors.black, fontSize: 30 }}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          </View>
        );
      }}
    </CountdownCircleTimer>
  );
};

export default Timer;
