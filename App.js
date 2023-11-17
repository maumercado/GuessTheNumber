import { useCallback, useState } from 'react'
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import colors from './constants/colors'

SplashScreen.preventAutoHideAsync()

export default function App () {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [rounds, setRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  function startNewGameHandler () {
    setUserNumber(null)
    setRounds(0)
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  function startGameHandler (selectedNumber) {
    setUserNumber(selectedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler (numberOfRounds) {
    setGameIsOver(true)
    setRounds(numberOfRounds)
  }

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} rounds={rounds} onNewGame={startNewGameHandler} />
  }

  return (
    <LinearGradient colors={[colors.primary[500], colors.secondary[500]]} style={styles.rootScreen} onLayout={onLayoutRootView}>
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
