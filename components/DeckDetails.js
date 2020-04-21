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
          onPress={() => this.props.navigation.navigate('Quiz', { deck: deck, position: 0, score: 0 })}
          disabled={deck.questions !== undefined && deck.questions.length > 0 ? false : true}
        />
        <Button 
          title="Add Question"
          onPress={() => this.props.navigation.navigate('AddQuestion', { title: deck.title })}
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