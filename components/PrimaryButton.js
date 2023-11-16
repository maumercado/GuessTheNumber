import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton ({ children, onPress }) {
  return (
    <View style={styles.buttonsOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: '#840344' }}
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
    backgroundColor: '#72063c',
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
    backgroundColor: '#840344'
  }
})

export default PrimaryButton
