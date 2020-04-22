import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { getDecks } from '../utils/api'
import Deck from './Deck'

class DeckList extends Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    this.loadQuestions()

    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.loadQuestions()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  loadQuestions = () => {
    getDecks()
      .then(results => this.setState({ decks: results}))
  }

  render() {
    const { decks } = this.state

    return (
      <View>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => <Deck deck={decks[item]} navigation={this.props.navigation}/>}
          listKey={(item) => item}
        />
      </View>
    )
  }
}

export default DeckList