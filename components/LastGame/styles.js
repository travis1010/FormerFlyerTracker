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
  LastGame : {
    display: 'flex',
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(232, 65, 14, 0.7)',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  col: {
    flexGrow: 1,
  },
  cell: {
    padding: 0,
    borderWidth: 1,
  },
  scoreboard: {
    fontSize: 26,
    fontWeight: '600'
  },
  scoreText: {
    textAlign: 'center',
  },
  gameStats: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  latestGameText: {
    textAlign: 'center',
  }
})