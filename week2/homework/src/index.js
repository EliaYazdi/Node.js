'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

const readHelp = fs.readFileSync('help.txt', 'utf8', (data, err) => {
  if (data) {
    console.log(data);
  }
  else if (err) {
    throw err;
  }
});
const readList = fs.readFileSync('list.txt', 'utf8', (data, err) => {
  if (data) {
    console.log(data);
  }
  else if (err) {
    throw err;
  }
});
// const listArray = [];
// listArray.push(readList);
// listArray.join('\n');
let listArray = readList.split('\n').filter(i => i.length >= 1);
function addList(todos) {
  listArray.push(todos);
  fs.writeFile('list.txt', listArray.join('\n'), (data, err) => {
    if (data) {
      console.log('New task added!');
    }
    else if (err) {
      throw err;
    }
  });
}

function removeList(todos) {
  listArray.splice((todos - 1), 1);
  fs.writeFile('list.txt', listArray.join('\n'), (data, err) => {
    if (data) {
      console.log('New task added!');
    }
    else if (err) {
      throw err;
    }
  });
}

function reset() {
  fs.writeFile('list.txt', '', (data, err) => {
    if (data) {
      console.log('There should be no data here!');
    }
    else if (err) {
      throw err;
    }
  });
}

const command = process.argv[2];
const task = process.argv[3];

function main() {
  if (command === 'help') {
    console.log(readHelp);
  }
  else if (command === 'list') {
    console.log(readList);
  }
  else if (command === 'add') {
    // console.log('add', listArray, 'jgkfjg');
    addList(task);
  }
  else if (command === 'remove') {
    removeList(task);
  }
  else if (command === 'reset') {
    reset();
  }
}
main();
