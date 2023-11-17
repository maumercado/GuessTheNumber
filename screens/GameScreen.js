import { useState } from 'react'
import { Alert, View, Text, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

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

function GameScreen ({ userNumber }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

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
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        </View>
      </View>
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
  }
})

export default GameScreen
