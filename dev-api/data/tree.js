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
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 26,
        time: labels.time18
      },
      {
        id: 16,
        name: 'M2',
        team1: labels.Italy,
        team2: labels.Austria,
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 26,
        time: labels.time21
      },
      {
        id: 11,
        name: 'M3',
        team1: labels.Netherlands,
        team2: labels.Czech,
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 27,
        time: labels.time18
      },
      {
        id: 17,
        name: 'M4',
        team1: labels.Belgium,
        team2: labels.Portugal,
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 27,
        time: labels.time21
      },
      {
        id: 14,
        name: 'M5',
        team1: labels.Croatia,
        team2: labels.Spain,
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 28,
        time: labels.time18
      },
      {
        id: 15,
        name: 'M6',
        team1: labels.France,
        team2: labels.Switzerland,
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 28,
        time: labels.time21
      },
      {
        id: 12,
        name: 'M7',
        team1: labels.England,
        team2: labels.Germany,
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 29,
        time: labels.time18
      },
      {
        id: 13,
        name: 'M8',
        team1: labels.Sweden,
        team2: labels.Ukraine,
        goals1: '-',
        goals2: '-',
        winner: 0,
        date: 29,
        time: labels.time21
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
        team1: 'M6',
        team2: 'M5',
        goals1: '-',
        goals2: '-',
        winner: 0
      },
      {
        id: 21,
        name: 'QF2',
        team1: 'M4',
        team2: 'M2',
        goals1: '-',
        goals2: '-',
        winner: 0
      },
      {
        id: 22,
        name: 'QF3',
        team1: 'M3',
        team2: 'M1',
        goals1: '-',
        goals2: '-',
        winner: 0
      },
      {
        id: 23,
        name: 'QF4',
        team1: 'M8',
        team2: 'M7',
        goals1: '-',
        goals2: '-',
        winner: 0
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
        team1: 'QF2',
        team2: 'QF1',
        goals1: '-',
        goals2: '-',
        winner: 0
      },
      {
        id: 31,
        name: 'SF2',
        team1: 'QF4',
        team2: 'QF3',
        goals1: '-',
        goals2: '-',
        winner: 0
      }
    ]
  },
  {
    id: 4,
    name: 'Final',
    date: 11,
    team1: 'SF1',
    team2: 'SF2',
    goals1: '-',
    goals2: '-',
    winner: 0
  }
];
