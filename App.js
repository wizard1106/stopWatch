import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
//import React, { useState } from 'react';
//import { View, Text, Button } from 'react-native'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

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