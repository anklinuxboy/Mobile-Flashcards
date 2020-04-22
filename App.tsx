import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import Home from './components/Home.js';
import { setLocalNotification } from './utils/helpers.js';

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Home />
        </View>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
  },
});

export default App
