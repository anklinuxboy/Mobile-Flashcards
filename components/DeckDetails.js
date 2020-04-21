import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { background } from '../utils/colors'

class DeckDetails extends Component {
  render() {

    const { deck } = this.props.route.params

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{deck.title}</Text>
        <Text style={styles.textStyle}>{deck.questions.length !== undefined ? deck.questions.length : 0} cards in deck</Text>
        <Button
          title="Start Quiz"
        />
        <Button 
          title="Add Question"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background,
  },
  textStyle: {
    fontSize: 24,
    marginBottom: 20,
  },
})

export default DeckDetails