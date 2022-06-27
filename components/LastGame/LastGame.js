import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function LastGame(props) {
 
  return (
    <View>
      <Text style={[styles.text, styles.latestGameText]}>Latest Game {new Date(props.lastGameLineScore.periods[0].startTime).toLocaleDateString('en-US')}</Text>
      <View style={styles.LastGame}>
        <View style={styles.row}>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.scoreboard]}>
                {props.lastGameLineScore.teams.away.team.name}
              </Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.scoreboard]}>
                {props.lastGameLineScore.teams.home.team.name}
              </Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.scoreboard, styles.scoreText]}>
                {props.lastGameLineScore.teams.away.goals}
              </Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.scoreboard, styles.scoreText]}>
                {props.lastGameLineScore.teams.home.goals}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>G</Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>{props.lastGameStats.goals}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>A</Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>{props.lastGameStats.assists}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>P</Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>{props.lastGameStats.points}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>+/-</Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>{props.lastGameStats.plusMinus}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>FO %</Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>{props.lastGameStats.faceOffPct || '-'}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>TOI</Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.text, styles.gameStats]}>{props.lastGameStats.timeOnIce}</Text>
            </View>
          </View>
        </View>
      
      </View>
    </View>
  );
}