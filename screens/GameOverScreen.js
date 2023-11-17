import { View, Text, Image, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen () {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.</Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.primary[500],
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: colors.primary[500]
  }
})

export default GameOverScreen
