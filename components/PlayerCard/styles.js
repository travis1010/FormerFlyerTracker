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
  PlayerCard: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center'
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center'
  },
  currentTeamText: {
    textAlign: 'center',
    fontSize: 20,
  },
  playerNumber: {
    color: '#F74902',
  }

})