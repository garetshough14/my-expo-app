import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.green}>
        Home <br />
        <Text>About</Text> <br />
        <Text>Contact</Text> <br />
        <Text>FAQ</Text>
      </Text>
      <Text style={styles.red}>
        <Text style={styles.bodyContainer}>
          asdasda
        </Text>
      </Text>
      <Text style={styles.purple}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  green: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1px',
    top: 10,
    position: 'absolute',
    borderRadius: '10px',
    width:'99%',
    height:'60px',
    backgroundColor: 'green',
  },
  red: {
    width:'100%',
    height: '100%',
    backgroundColor: 'red',
  },
  purple: {
    width:'100%',
    height:'100px',
    backgroundColor: 'purple',
    borderTopWidth: '1px',
  },
  bodyContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'Blue',
  }
});
