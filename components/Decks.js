import React, { Component } from 'react'
import DeckList from './DeckList'
import { createStackNavigator  } from '@react-navigation/stack'
import DeckDetails from './DeckDetails'
import AddQuestion from './AddQuestion'
import Quiz from './Quiz'

const Stack = createStackNavigator()

class Decks extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Decks">
        <Stack.Screen name="Decks" component={DeckList} />
        <Stack.Screen name="Details" component={DeckDetails} />
        <Stack.Screen name="AddQuestion" component={AddQuestion} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    )
  }
}

export default Decks
