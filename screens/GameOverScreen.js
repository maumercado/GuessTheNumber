import { useWindowDimensions, View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Title from '../components/ui/Title'
import colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen ({ rounds, userNumber, onNewGame }) {
  const { width, height } = useWindowDimensions()

  let imageSize = 300

  if (width < 350) {
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 80
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
      <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    borderRadius: 150,
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
