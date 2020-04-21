import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { background } from '../utils/colors'

class StartQuiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Start Quiz</Text>
        <Button
          title="Submit"
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
    justifyContent: 'center',
  },
})

export default StartQuiz