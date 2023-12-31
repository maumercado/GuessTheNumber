import { useState, useEffect } from 'react'
import {
  Alert,
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import GuessLogItem from '../components/game/GuessLogItem'

function generateRandomNumber (min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return randomNumber
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen ({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  function nextGuessHandler (direction) {
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
    } else {
      if (direction === 'lower') {
        maxBoundary = currentGuess
      } else {
        minBoundary = currentGuess + 1
      }
      const nextNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
      setCurrentGuess(nextNumber)
      setGuessRounds(guessRounds => [nextNumber, ...guessRounds])
    }
  }

  const guessRoundsListLength = guessRounds.length
  let content =(<>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card>
      <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}><Ionicons size={24} name='md-add' color='white' /></PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons size={24} name='md-remove' color='white' /></PrimaryButton>
        </View>
      </View>
    </Card>
  </>)

  if (width > 500) {
    content = (
      <View style={styles.buttonsContainerWide}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}><Ionicons size={24} name='md-add' color='white' /></PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons size={24} name='md-remove' color='white' /></PrimaryButton>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Title>Guesses!</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              />
            )
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})

export default GameScreen
