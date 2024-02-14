import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const StopwatchApp = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10 milliseconds
      }, 10);
    }

    return () => {
      clearInterval(timer); // Cleanup the interval on component unmount or when paused
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleStop = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  const clearLaps = () => {
    setLaps([]);
  };



  // Convert milliseconds to hours, minutes, seconds, and milliseconds
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{`${hours}:${minutes}:${seconds}.${milliseconds}`}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePause}>
          <Text>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleStop}>
          <Text>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLap}>
          <Text>Lap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={clearLaps}>
          <Text>Clear Laps</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lapContainer}>
        <Text>Laps:</Text>
        {laps.map((lap, index) => (
          <Text key={index}>{`Lap ${index + 1}: ${lap}`}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  lapContainer: {
    marginTop: 20,
  },
});

export default StopwatchApp;
