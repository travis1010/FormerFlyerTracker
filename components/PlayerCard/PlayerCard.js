import { View, Text } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';


export default function PlayerCard(props) {
  

  return (
    <View style={styles.PlayerCard} >
      <Text style={[styles.text, styles.header]}>{props.currentPlayer.name} <Text style={styles.playerNumber}>#{props.currentPlayer.number}</Text></Text>
      <Text style={[styles.text, styles.currentTeamText]}>{props.currentTeam}</Text>
    </View>
  );
}  