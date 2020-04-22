import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { background } from '../utils/colors'

class Quiz extends Component {
  state = {
    showAnswer: false,
  }

  onScorePress = (correct) => {
    let { deck, position, score } = this.props.route.params

    if (correct) {
      score += 1
    }

    if (position + 1 < deck.questions.length) {
      this.props.navigation.push('Quiz', { deck, position: position+1, score: score})
    } else {
      this.props.navigation.push('Results', { deck, score })
    }
  }

  render() {
    const { deck, position } = this.props.route.params

    const { showAnswer } = this.state
    const q = deck.questions[position]

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