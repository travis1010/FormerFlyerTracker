import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { styles } from './styles';
import PlayerCard from './components/PlayerCard/PlayerCard'
import LastGame from './components/LastGame/LastGame';
import SeasonStats from './components/SeasonStats/SeasonStats';
import NextGame from './components/NextGame/NextGame';
import PlayerSelector from './components/PlayerSelector/PlayerSelector';

export default function App() {
  const players = [
    {
      id: 8470604,
      name: "Jeff Carter",
      number: 77
    },
    {
      id: 8473512,
      name: "Claude Giroux",
      number: 28
    },
    {
      id: 8476906,
      name: "Shayne Gostisbehere",
      number: 14
    },
    {
      id: 8477290,
      name: "Michael Raffl",
      number: 18
    },
    {
      id: 8475170,
      name: "Brayden Schenn",
      number: 10
    },
    {
      id: 8474190,
      name: "Wayne Simmonds",
      number: 24
    },
    {
      id: 8474161,
      name: "Jakub Voracek",
      number: 93
    },
  ]
  
  const [currentPlayer, setCurrentPlayer] = useState(players[1]);

  const [currentTeamStats, setCurrentTeamStats] = useState({
    wins: 0,
    losses: 0,
    OTs: 0,
    team: '',
    gp: 0,
    goals: 0,
    assists: 0,
    points: 0,
    faceOffPct: 0,
    avgTimeOnIce: 0,
    plusMinus: 0,
    pointsPerGame: 0,
    currentTeam: '',
  });

  const [lastGameStats, setLastGameStats] = useState({
    goals: 0,
    assists: 0,
    points: 0,
    faceOffPct: 0,
    timeOnIce: 0,
    plusMinus: 0
  });

  const [lastGameLineScore, setLastGameLineScore] = useState({
    periods: [{startTime: ''}],
    teams: {
      away: {
        goals: 0,
        team: {
          name: ''
        }
      }, 
      home: {
        goals: 0,
        team: {
          name: ''
        }
      }
    }
  });

   const [nextGame, setNextGame] = useState({
    home: '',
    away: ''
  })

  function changeCurrentPlayer(playerIndex) {
    console.log('setting current player ' + playerIndex)
    setCurrentPlayer(players[playerIndex]);
  }

  //fetch all necessary stats from api, and parse them.
  function getPlayerStats() {
    //fetch season game-by-game log for player
    fetch(`https://statsapi.web.nhl.com/api/v1/people/${currentPlayer.id}/stats?stats=gameLog&season=20212022`).then((res) => {
      return res.json();
    }).then((seasonGameLog) => {
      const teamID = seasonGameLog.stats[0].splits[0].team.id;
      const currentTeamGames = seasonGameLog.stats[0].splits.filter((game) => game.team.id == teamID);
      setCurrentTeamStats(getStatsFromGames(currentTeamGames));
      const lastGame = currentTeamGames[0];
      setLastGameStats(getStatsFromSingleGame(lastGame))

      //fetch linescore for last game
      fetch(`https://statsapi.web.nhl.com/api/v1/game/${lastGame.game.gamePk}/linescore`).then((res) => {
        return res.json();
      }).then ((lastGameLineScore) => {
        setLastGameLineScore(lastGameLineScore);
      });

      //fetch teams next scheduled game
      fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}?expand=team.schedule.next`).then((res) => {
      return res.json();
      }).then((nextGame) => {
        if ( nextGame.teams[0].nextGameSchedule == undefined) {
          console.log('no next game')
        } else {
          console.log({nextGame});
          const nextGameInfo = {};
          nextGameInfo.home = nextGame.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.name;
          nextGameInfo.away = nextGame.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.name;
          const dateTime = new Date(nextGame.teams[0].nextGameSchedule.dates[0].games[0].gameDate);
          nextGameInfo.date = dateTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
          const time = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
          nextGameInfo.time = time;
          setNextGame(nextGameInfo); 
        }

      })
      
    })

   
  }

  function getStatsFromSingleGame(game) {
    let goals = game.stat.goals;
    let assists = game.stat.assists;
    let points = goals + assists;
    let faceOffPct = game.stat.faceOffPct;
    let timeOnIce = game.stat.timeOnIce;
    let plusMinus = game.stat.plusMinus > 0 ? `+${game.stat.plusMinus}` : game.stat.plusMinus;
    return { goals, assists, points, faceOffPct, timeOnIce, plusMinus };
  }

  function getStatsFromGames(gamesArr) {
    let wins = 0;
    let losses = 0;
    let OTs = 0;
    let team = gamesArr[0].team.name;
    let gp = gamesArr.length;
    let goals = 0;
    let assists = 0;
    let totFaceOffPct = 0;
    let faceOffGames = 0;
    let totTimeOnIceSeconds = 0;
    let plusMinus = 0;
    
    let currentTeam = gamesArr[0].team.name;

    gamesArr.forEach((game) => {
      if(game.isWin) {
        wins++;
      } else if(game.isOT) {
        OTs++;
      } else {
        losses++;
      }
      goals += game.stat.goals;
      assists += game.stat.assists;
      if(game.stat.faceOffPct){
        totFaceOffPct += game.stat.faceOffPct;
        faceOffGames++;
      }
      plusMinus += game.stat.plusMinus;
      let timeOnIce = game.stat.timeOnIce.split(':').map(n => Number(n));
      totTimeOnIceSeconds += (timeOnIce[0] * 60 + timeOnIce[1]);
    })
   
    const avgFaceOffPct = Math.round(((totFaceOffPct / faceOffGames)+ Number.EPSILON) * 100) / 100;

    const avgTimeOnIceSeconds = totTimeOnIceSeconds / gp;
    let seconds = Math.round(avgTimeOnIceSeconds % 60).toString();
    let minutes = Math.round((avgTimeOnIceSeconds - seconds) / 60).toString();

    if (seconds.length === 1) {
      seconds = "0" + seconds;
    }

    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }

    const avgTimeOnIce = minutes + ':' + seconds;

    const points = goals + assists;
    const pointsPerGame = Math.round(((points / gp ) + Number.EPSILON) * 100) / 100;
    if(plusMinus > 0) { plusMinus = `+${plusMinus}`; }
    
    return {team, gp, goals, assists, avgFaceOffPct: avgFaceOffPct, plusMinus, avgTimeOnIce, points, pointsPerGame, wins, losses, OTs, currentTeam}
  }

  useEffect(() => {
    getPlayerStats();
  }, [])

  useEffect(() => {
    getPlayerStats();
  }, [currentPlayer])

  return (
    <View style={styles.container}>
      <PlayerSelector players={players} currentPlayer={currentPlayer} changeCurrentPlayer={changeCurrentPlayer} />
      <ScrollView contentContainerStyle={styles.ScrollViewContainer}>
        <PlayerCard currentPlayer={currentPlayer} currentTeam={currentTeamStats.currentTeam} />
        <LastGame lastGameLineScore={lastGameLineScore} lastGameStats={lastGameStats} />
        <SeasonStats seasonStats={currentTeamStats} />
        <NextGame nextGameInfo={nextGame} />
      </ScrollView>
      <StatusBar style='light' />
    </View>
  );
}

