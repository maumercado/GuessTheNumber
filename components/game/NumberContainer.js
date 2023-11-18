import { Dimensions, View, Text, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

function NumberContainer ({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.secondary[500],
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center'
  },
  number: {
    color: colors.secondary[500],
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
})

export default NumberContainer
