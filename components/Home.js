import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Decks from './Decks'
import AddDeck from './AddDeck'
import { background } from '../utils/colors'

const Tab = createBottomTabNavigator()

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Tab.Navigator initialRouteName="Decks">
          <Tab.Screen name="Decks" component={Decks} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
})

export default Home