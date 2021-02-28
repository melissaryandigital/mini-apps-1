const helpers = require('../src/helpers/helpers.js');

let boardModel = [
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '']
];

test('Expects empty board to not be tied', () => {
  expect(helpers.checkForTie(boardModel)).toBe(false);
});


let boardModelHorizontalWin = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "Red", "", "", "Red", "", ""],
  ["Blue", "Blue", "Blue", "Blue", "Blue", "", ""],
  ["Red", "Red", "Red", "Blue", "Red", "", ""]
];

let player = 'Blue';
let row = 4;

test('Expects horizontal win to be true', () => {
  expect(helpers.checkForWinHorizontal(boardModelHorizontalWin, row, player)).toBe(true);
});



let boardModelVerticalWin = [
  ['', '', '', '', '', '', ''],
  ['', 'Blue', '', '', '', '', ''],
  ['', 'Blue', 'Red', '', '', '', ''],
  ['', 'Blue', 'Blue', 'Blue', 'Red', '', ''],
  ['Blue', 'Blue', 'Blue', 'Blue', '', '', ''],
  ['Red', 'Red', 'Red', 'Blue', 'Blue', '', '']
];

let col = 1;

test('Expects vertical win to be true', () => {
  expect(helpers.checkForWinVertical(boardModelVerticalWin, col, player)).toBe(true);
});



let boardModelMinorDiagonalWin = [
  ['', '', '', '', '', '', ''],
  ['', 'Blue', '', '', '', '', ''],
  ['', 'Blue', 'Red', 'Red', '', '', ''],
  ['', 'Blue', 'Red', 'Blue', 'Red', '', ''],
  ['Blue', 'Red', 'Blue', 'Blue', '', '', ''],
  ['Red', 'Red', 'Red', 'Blue', 'Blue', '', '']
];

let minorDiagCol = 3;
let minorDiagRow = 2;
let minorDiagPlayer = 'Red';

test('Expects minor diagonal win to be true', () => {
  expect(helpers.checkForWinMinorDiagonal(boardModelMinorDiagonalWin, minorDiagCol, minorDiagRow, minorDiagPlayer)).toBe(true);
});

