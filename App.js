import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useState } from 'react';
import { Colors } from './src/ui/Colors';
import Timer from './src/components/Timer';
import EggIcon from './src/components/EggIcon';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TimerControls from './src/components/TimerControls';

export default function App() {
  const [eggSelections, setEggSelections] = useState([
    false, // for 'S' egg
    false, // for 'M' egg
    false, // for 'L' egg
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = (index) => {
    const newSelections = eggSelections.map((selection, idx) => idx === index);
    setEggSelections(newSelections);
  };

  const selectedEggSize = eggSelections.findIndex((selection) => selection === true);

  const handlePlay = () => {
    setIsPlaying(true); // toggle
  };

  const handlePause = () => {
    setIsPlaying(!isPlaying); // toggle
  };

  const handleStop = () => {
    setIsPlaying(!isPlaying); // toggle
  };

  const handleReset = () => {
    // create reset timer function

    setIsPlaying(!isPlaying); // toggle
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HOW DO YOU LIKE YOUR EGGS?</Text>
      <View style={styles.eggContainer}>
        <EggIcon handlePress={() => handlePress(0)} isSelected={eggSelections[0]} text={'Soft'} />
        <EggIcon handlePress={() => handlePress(1)} isSelected={eggSelections[1]} text={'Medium'} />
        <EggIcon handlePress={() => handlePress(2)} isSelected={eggSelections[2]} text={'Hard'} />
      </View>
      <Text style={styles.title}>TIMER</Text>
      <View style={styles.timerContainer}>
        <Timer
          isPlaying={isPlaying}
          selectedEggSize={
            selectedEggSize === 0
              ? 'S'
              : selectedEggSize === 1
              ? 'M'
              : selectedEggSize === 2
              ? 'L'
              : 0
          }
        />
      </View>
      <TimerControls
        isPlaying={isPlaying}
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleStop={handleStop}
        handleReset={handleReset}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  eggContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
