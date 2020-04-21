import React, { Component } from 'react'
import DeckList from './DeckList'
import { createStackNavigator  } from '@react-navigation/stack'
import DeckDetails from './DeckDetails'

const Stack = createStackNavigator()

class Decks extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Decks" component={DeckList} />
        <Stack.Screen name="Details" component={DeckDetails} />
      </Stack.Navigator>
    )
  }
}

export default Decks
