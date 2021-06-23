const labels = require('../../src/assets/labels');

module.exports = [
  {
    id: 1,
    name: 'Round of 16',
    matches: [
      { id: 10, name: 'M1', team1: labels.Wales, team2: labels.Denmark },
      { id: 11, name: 'M2', team1: labels.Italy, team2: labels.Austria },
      { id: 12, name: 'M3', team1: labels.Netherlands, team2: '3D/3F' },
      { id: 13, name: 'M4', team1: labels.Belgium, team2: '3A/3E/3F' },
      { id: 14, name: 'M5', team1: labels.Croatia, team2: '2E' },
      { id: 15, name: 'M6', team1: '1F', team2: '3A/3C' },
      { id: 16, name: 'M7', team1: labels.England, team2: '2F' },
      { id: 17, name: 'M8', team1: '1E', team2: '3b/3C/3D' }
    ]
  },
  {
    id: 2,
    name: 'Quater-finals',
    matches: [
      { id: 20, name: 'QF1', team1: 'M6', team2: 'M5' },
      { id: 21, name: 'QF2', team1: 'M4', team2: 'M2' },
      { id: 22, name: 'QF3', team1: 'M3', team2: 'M1' },
      { id: 23, name: 'QF4', team1: 'M8', team2: 'M7' }
    ]
  },
  {
    id: 3,
    name: 'Semi-finals',
    matches: [
      { id: 30, name: 'SF1', team1: 'QF2', team2: 'QF1' },
      { id: 31, name: 'SF2', team1: 'QF4', team2: 'QF3' }
    ]
  },
  { id: 4, name: 'Final', date: 11, team1: 'SF1', team2: 'SF2' }
];
