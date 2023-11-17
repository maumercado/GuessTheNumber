import { useState, useEffect } from 'react'
import { Alert, View, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

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

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

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
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Guesses!</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {/* Log Rounds */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})

export default GameScreen
