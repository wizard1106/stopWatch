//Stop Watch 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

const TimerApp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const lapTimer = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  const clearLaps = () => {
    setLaps([]);
  };

  const renderLapItem = ({ item, index }) => (
    <Text style={styles.lapItem}>{`Lap ${index + 1}: ${formatTime(item)}`}</Text>
  );

  const formatTime = (time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = (time % 6000) % 100;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(time)}</Text>
      <View style={styles.buttonsContainer}>
        {!isRunning ? (
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={pauseTimer}>
            <Text>Pause</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={lapTimer}>
          <Text>Lap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearLaps}>
          <Text>Clear Laps</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={laps}
        renderItem={renderLapItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.lapList}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  lapList: {
    flex: 1,
    width: '100%',
  },
  lapItem: {
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default TimerApp;
