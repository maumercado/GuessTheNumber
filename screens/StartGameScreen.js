import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import colors from '../constants/colors'

function StartGameScreen ({ onConfirmNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler (enteredText) {
    setEnteredNumber(enteredText.replace(/[^0-9]/g, ''))
  }

  function resetInputHandler () {
    setEnteredNumber('')
  }

  function confirmInputHandler () {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'default', onPress: resetInputHandler }])
    }
    onConfirmNumber(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    elevation: 4, // Android only
    shadowColor: 'black', // iOS only
    shadowOffset: { width: 0, height: 2 }, // iOS only
    shadowRadius: 6, // iOS only
    shadowOpacity: 0.25 // iOS only
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.secondary[500],
    borderBottomWidth: 2,
    color: colors.secondary[500],
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})

export default StartGameScreen
