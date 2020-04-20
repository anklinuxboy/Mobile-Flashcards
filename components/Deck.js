import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Deck extends Component {
  render() {
    const { deck } = this.props
    const title = deck.title
    const questions = deck.questions !== undefined ? deck.questions.length : 0
    return (
      <TouchableOpacity style={styles.deck}>
        <Text style={{ fontSize: 30}}>{title}</Text>
        <Text style={{ fontSize: 20}}>{questions} questions in deck</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    backgroundColor: '#FFAB40',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
    paddingStart: 16,
    paddingTop: 8,
    paddingBottom: 8,
  }
})

export default Deck