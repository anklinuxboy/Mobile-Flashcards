import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { background } from '../utils/colors'

class Quiz extends Component {
  state = {
    score: 0,
    finalView: false,
    showAnswer: false,
  }

  restartQuiz = () => {
    const { deck } = this.props.route.params
    this.props.navigation.popToTop()
    this.props.navigation.navigate('Quiz', { deck: deck, position: 0, score: 0 })
  }

  navigateToDeckView = () => {
    this.props.navigation.navigate('Decks')
  }

  onScorePress = (correct) => {
    if (correct) {
      this.setState((currState) => {
        const score = currState.score + 1

        return {
          ...currState,
          score,
        }
      })
    }

    const { deck, position } = this.props.route.params
    const { score } = this.state

    if (position + 1 < deck.questions.length) {
      this.props.navigation.push('Quiz', { deck, position: position+1, score: score})
    } else {
      this.setState({finalView: true})
    }
  }

  render() {
    const { deck, position } = this.props.route.params

    const { score, finalView, showAnswer } = this.state
    console.log(`position ${position} score ${score}`)
    const q = deck.questions[position]

    if (finalView) {
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

    return (
      <View style={styles.container}>
        {
          showAnswer == false
          ? <View>
              <Text>
                {q.question}
              </Text>
              <Button
                title='Show Answer'
                onPress={() => this.setState({showAnswer: true})}
              />
            </View>
          : <View>
              <Text>
                {q.answer}
              </Text>
              <Button
                title='Show Question'
                onPress={() => this.setState({showAnswer: false})}
              />
            </View>
        }
        <Button
          title='Correct'
          onPress={() => this.onScorePress(true)}
        />
        <Button
          title='Incorrect'
          onPress={() => this.onScorePress(false)}
        />
        <Text>{position + 1} of {deck.questions.length} questions</Text>
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

export default Quiz