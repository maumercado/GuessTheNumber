import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'

function generateRandomNumber (min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return randomNumber
  }
}

function GameScreen ({ userNumber }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  return (
    <View style={styles.screen}>
      <Title>Guesses!</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
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
