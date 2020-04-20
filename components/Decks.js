import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';
import { getDecks } from '../utils/api'
import Deck from './Deck'

class Decks extends Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    getDecks()
      .then(results => this.setState({ decks: results}))
  }

  render() {
    const { decks } = this.state

    return (
      <View>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => <Deck deck={decks[item]} />}
        />
      </View>
    )
  }
}

export default Decks
