const labels = require('../../src/assets/labels');

module.exports = [
  {
    id: 1,
    name: 'Round of 16',
    matches: [
      {
        id: 10,
        name: 'M1',
        team1: labels.Wales,
        team2: labels.Denmark,
        score1: 0,
        score2: 4,
        winner: 2,
        date: 26,
        time: labels.time18,
        day: labels.Saturday
      },
      {
        id: 16,
        name: 'M2',
        team1: labels.Italy,
        team2: labels.Austria,
        score1: 2,
        score2: 1,
        winner: 1,
        date: 26,
        time: labels.time21,
        day: labels.Saturday
      },
      {
        id: 11,
        name: 'M3',
        team1: labels.Netherlands,
        team2: labels.Czech,
        score1: 0,
        score2: 2,
        winner: 2,
        date: 27,
        time: labels.time18,
        day: labels.Sunday
      },
      {
        id: 17,
        name: 'M4',
        team1: labels.Belgium,
        team2: labels.Portugal,
        score1: 1,
        score2: 0,
        winner: 1,
        date: 27,
        time: labels.time21,
        day: labels.Sunday
      },
      {
        id: 14,
        name: 'M5',
        team1: labels.Croatia,
        team2: labels.Spain,
        score1: 3,
        score2: 5,
        winner: 2,
        date: 28,
        time: labels.time18,
        day: labels.Monday
      },
      {
        id: 15,
        name: 'M6',
        team1: labels.France,
        team2: labels.Switzerland,
        score1: 7,
        score2: 8,
        winner: 2,
        date: 28,
        time: labels.time21,
        day: labels.Monday
      },
      {
        id: 12,
        name: 'M7',
        team1: labels.England,
        team2: labels.Germany,
        score1: 2,
        score2: 0,
        winner: 1,
        date: 29,
        time: labels.time18,
        day: labels.Tuesday
      },
      {
        id: 13,
        name: 'M8',
        team1: labels.Sweden,
        team2: labels.Ukraine,
        score1: 1,
        score2: 2,
        winner: 2,
        date: 29,
        time: labels.time21,
        day: labels.Tuesday
      }
    ]
  },
  {
    id: 2,
    name: 'Quater-finals',
    matches: [
      {
        id: 20,
        name: 'QF1',
        date: 2,
        team1: 'M6',
        team2: 'M5',
        score1: 2,
        score2: 4,
        winner: 2,
        time: labels.time18,
        day: labels.Friday
      },
      {
        id: 21,
        name: 'QF2',
        date: 2,
        team1: 'M4',
        team2: 'M2',
        score1: 1,
        score2: 2,
        winner: 2,
        time: labels.time21,
        day: labels.Friday
      },
      {
        id: 22,
        name: 'QF3',
        date: 3,
        team1: 'M3',
        team2: 'M1',
        score1: 1,
        score2: 2,
        winner: 2,
        time: labels.time18,
        day: labels.Saturday
      },
      {
        id: 23,
        name: 'QF4',
        date: 3,
        team1: 'M8',
        team2: 'M7',
        score1: 0,
        score2: 4,
        winner: 2,
        time: labels.time21,
        day: labels.Saturday
      }
    ]
  },
  {
    id: 3,
    name: 'Semi-finals',
    matches: [
      {
        id: 30,
        name: 'SF1',
        date: 6,
        team1: 'QF2',
        team2: 'QF1',
        score1: 5,
        score2: 3,
        winner: 1,
        time: labels.time21,
        day: labels.Tuesday
      },
      {
        id: 31,
        name: 'SF2',
        date: 7,
        team1: 'QF4',
        team2: 'QF3',
        score1: 2,
        score2: 1,
        winner: 1,
        time: labels.time21,
        day: labels.Wednesday
      }
    ]
  },
  {
    id: 4,
    name: 'Final',
    date: 11,
    team1: 'SF1',
    team2: 'SF2',
    score1: 4,
    score2: 3,
    winner: 0,
    time: labels.time21,
    day: labels.Sunday
  }
];
