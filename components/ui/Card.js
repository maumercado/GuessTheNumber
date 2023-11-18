import { Dimensions, View, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

function Card ({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    elevation: 4, // Android only
    shadowColor: 'black', // iOS only
    shadowOffset: { width: 0, height: 2 }, // iOS only
    shadowRadius: 6, // iOS only
    shadowOpacity: 0.25 // iOS only
  }
})

export default Card
