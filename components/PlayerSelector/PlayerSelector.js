import * as React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';

export default function PlayerSelector(props) {
  const [currentPlayer, setCurrentPlayer] = useState(props.currentPlayer)

  function updatePlayer(index) {
    setCurrentPlayer(props.players[index]);
    props.changeCurrentPlayer(index);
  }

  return (
    <View style={styles.pickerView}>
      <Picker selectedValue={currentPlayer.name} onValueChange={(value, index) => updatePlayer(index)} style={[styles.text, styles.picker]} dropdownIconColor= '#fff'>
        {
          props.players.map((player) => (
            <Picker.Item label={player.name} value={player.name} key={player.id}/>
          ))
        }
      </Picker>
    </View>
  );
}