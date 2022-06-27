import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
  },
  NextGameContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NextGame: {
    backgroundColor: 'rgba(232, 65, 14, 0.7)',
    borderWidth: 2,
  },
})