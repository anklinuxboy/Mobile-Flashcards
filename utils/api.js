import AsyncStorage from '@react-native-community/async-storage'
import decks from './_DATA'

const DECKS_KEY = 'MobileFlashcards:decks2'

export function submitDeck(entry, key) {
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function submitQuestion(deckTitle, question, answer) {
  const entry = { question: question, answer: answer }
  return getDecks()
    .then(results => {
      const deck = results[deckTitle]
      deck.questions.push(entry)
      submitDeck(deck, deckTitle)
    })
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