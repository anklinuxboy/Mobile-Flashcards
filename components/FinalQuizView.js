import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { background } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class FinalQuizView extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  restartQuiz = () => {
    const { deck } = this.props.route.params
    this.props.navigation.popToTop()
    this.props.navigation.navigate('Quiz', { deck: deck, position: 0, score: 0 })
  }

  navigateToDeckView = () => {
    this.props.navigation.navigate('Decks')
  }

  render() {
    const { deck, score } = this.props.route.params

    return (
      <View style={styles.container}>
        <Text>Answered {score} of {deck.questions.length} questions</Text>
        <Button
          title='Restart Quiz'
          onPress={() => this.restartQuiz()}
        />
        <Button
          title='Decks'
          onPress={() => this.navigateToDeckView()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    paddingTop: 40,
  },
})

export default FinalQuizView