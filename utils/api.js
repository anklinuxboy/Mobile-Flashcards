import AsyncStorage from '@react-native-community/async-storage'
import decks from './_DATA'

const DECKS_KEY = 'MobileFlashcards:decks2'

export function submitDeck(entry, key) {
  console.log(entry, key)
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(formatResults)
}

function formatResults(results) {
  return results === null
    ? decks
    : JSON.parse(results)
}