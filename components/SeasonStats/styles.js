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
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  SeasonStats: {
    backgroundColor: 'rgba(232, 65, 14, 0.7)',
    borderWidth: 2,
  },
  line: {
    alignItems: 'baseline',
  },
  number: {
    fontSize: 24,
    fontWeight: '700',
    paddingRight: -2
  },
  seasonText: {
    textAlign: 'center',
  }
})