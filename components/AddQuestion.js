import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { background, white } from '../utils/colors'
import { submitQuestion } from '../utils/api'

class AddQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  onSubmit = () => {
    const { question, answer } = this.state
    const { title } = this.props.route.params

    submitQuestion(title, question.trim(), answer.trim())
      .then(() => this.props.navigation.navigate('Decks'))
  }

  render() {
    const { question, answer } = this.state
    const { title } = this.props.route.params

    return (
      <View style={styles.container}>
        <Text>Add question to {title}</Text>
        <TextInput
          style={styles.input}
          placeholder={'Enter question'} 
          value={question}
          onChangeText={text => this.setState({ question: text})}
        />
        <TextInput
          style={styles.input}
          placeholder={'Enter answer'} 
          value={answer}
          onChangeText={text => this.setState({ answer: text})}
        />
        <Button
          title="Submit"
          onPress={() => this.onSubmit()}
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
  input: {
    height: 40,
    backgroundColor: white,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 4,
    padding: 8,
    width: 200,
    borderWidth: 1,
  },
})

export default AddQuestion