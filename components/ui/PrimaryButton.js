import { View, Text, Pressable, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

function PrimaryButton ({ children, onPress }) {
  return (
    <View style={styles.buttonsOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: colors.primary[100] }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary[300],
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2 // Android only
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: colors.primary[100]
  }
})

export default PrimaryButton
