import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useState } from 'react';
import { Colors } from './src/ui/Colors';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        key={count}
        isPlaying
        duration={10}
        colors={Colors.yellow}
        onComplete={() => [true, 1000]}
      >
        {({ remainingTime, animatedColor }) => (
          <Text style={{ color: animatedColor }}>{remainingTime}</Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
