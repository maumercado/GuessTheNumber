import { Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

function Title ({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary[500],
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colors.secondary[500],
    padding: 12
  }
})

export default Title
