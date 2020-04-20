import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { white } from '../utils/colors'
import { submitDeck } from '../utils/api'

class AddDeck extends Component {
  state = {
    title: ""
  }

  onPressClicked = () => {
    const title = this.state.title.trim()

    const { navigation } = this.props

    if (title !== "") {
      submitDeck(
        {
          title: title,
          questions: []
        }
      , title)
        .then(() => navigation.navigate('Decks'))
    }
  }

  render() {
    const { title } = this.state
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder={'Enter title of deck'} 
          value={title}
          onChangeText={text => this.setState({ title: text})}
        />
        <Button
          title='Submit'
          disabled={title === "" ? true : false}
          onPress={() => this.onPressClicked()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    alignItems: 'center',
    paddingTop: 40,
  },
  input: {
    height: 40,
    backgroundColor: white,
    marginTop: 16,
    borderRadius: 4,
    padding: 8,
    width: 200,
    borderWidth: 1,
  },
})

export default AddDeck
