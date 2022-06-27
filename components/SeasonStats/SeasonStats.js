import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function SeasonStats(props) {
  return (
    <View>
      <Text style={[styles.text, styles.seasonText]}>2021-2022 Season</Text>
      <View style={styles.SeasonStats}>
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.gp}</Text>
          <Text style={styles.text}>GAMES PLAYED</Text>
        </View>
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.goals}</Text>
          <Text style={styles.text}>GOALS</Text>
        </View>
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.assists}</Text>
          <Text style={styles.text}>ASSISTS</Text>
        </View>
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.points}</Text>
          <Text style={styles.text}>POINTS</Text>
        </View>
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.pointsPerGame}</Text>
          <Text style={styles.text}>POINTS PER GAME</Text>
        </View>
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.plusMinus}</Text>
          <Text style={styles.text}>PLUS/MINUS</Text>
        </View>
        {(props.seasonStats.avgFaceOffPct > 0) &&
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.avgFaceOffPct}%</Text>
          <Text style={styles.text}>FACE OFF WINS</Text>
        </View>
        }
        <View style={[styles.row, styles.line]}>
          <Text style={[styles.text, styles.number]}>{props.seasonStats.avgTimeOnIce}</Text>
          <Text style={styles.text}>AVERAGE TIME ON ICE</Text>
        </View>
      </View>
    </View>
  );
}