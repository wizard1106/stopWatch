import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const FlatListBasics = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(()=>setTime(time+1), 10)
  }, [time]);

return(
  <>
    <Text></Text>
    <Text>{time}</Text>
    </>
  );

};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default FlatListBasics;