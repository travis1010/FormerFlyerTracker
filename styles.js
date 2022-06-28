import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    paddingTop: Constants.statusBarHeight + 5,
    flex: 1,
    alignItems: 'center',
  },
  ScrollViewContainer: {
    backgroundColor: '#292929',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    width: '100%',
  }
})