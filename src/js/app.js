// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

let players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
// let player = {
//   name: 'Маг',
//   health: 90
// }

export default function toMeasureHealth(player) {
//   for (let i = 0; i <= players.light; i++) {
    // for (const player of players) {
        let life = '';
        if (player.health >= 50) {
          life = 'healthy';
        } else if (player.health < 50 && player.health >= 15) {
          life = 'wounded';
        } else {
          life = 'critical';
        }
        return life;
    }
//   }
// };
