import { useState } from 'react'
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import colors from './constants/colors'

export default function App () {
  const [userNumber, setUserNumber] = useState()

  function startGameHandler (selectedNumber) {
    setUserNumber(selectedNumber)
  }

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }

  return (
    <LinearGradient colors={[colors.primary[500], colors.secondary[500]]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
})
