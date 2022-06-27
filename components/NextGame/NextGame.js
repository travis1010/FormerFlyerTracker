import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function NextGame(props) {
  if (props.nextGameInfo.date) {
    return (
      <View style={styles.NextGameContainer}>
        <Text style={styles.text}>Next Game</Text>
        <View style={styles.NextGame}>
          <Text style={styles.text}>{props.nextGameInfo.date}</Text>
          <Text style={styles.text}>{props.nextGameInfo.time}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.NextGameContainer}>
        <Text style={styles.text}>Next Game</Text>
        <View style={styles.NextGame}>
          <Text style={styles.text}>No Games Scheduled</Text>
        </View>
      </View>
    );
  }
  
}