import * as React from 'react';
import { Image, View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

import SelectDropdown from 'react-native-select-dropdown'


export default function PlayerSelector(props) {
  const [currentPlayer, setCurrentPlayer] = useState(props.currentPlayer)


  function updatePlayer(index) {
    setCurrentPlayer(props.players[index]);
    props.changeCurrentPlayer(index);
  }

 

  return (
    <View>
      <SelectDropdown
        data={props.players}
        onSelect={(selectedItem, index) => {
          updatePlayer(index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem["name"];
        }}
        rowTextForSelection={(item, index) => {
          return item["name"];
        }}
        defaultButtonText="Select Player"
        dropdownStyle={{width: 230, height: 320, borderRadius: 6, borderWidth: 1}}
        buttonStyle={{width: 230, height: 40, borderRadius: 6, borderWidth: 1}}
        renderDropdownIcon={() => (<Image source={require('../../assets/drop-down-arrow.png')} style={{width: 12, height: 12}} />)}
      />
    
    </View>
  );
}