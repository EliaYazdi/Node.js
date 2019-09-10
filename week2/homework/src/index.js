'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

const readList = fs.readFileSync('list.txt', 'utf8', (data, err) => {
  if (data) {
    console.log(data);
  }
  else if (err) {
    throw err;
    console.log('failed!');
  }
});
// console.log(readList);
const listArray = [];
listArray.push(readList);
// console.log(listArray);

const readHelp = fs.readFileSync('help.txt', 'utf8', (data, err) => {
  if (data) {
    console.log(data);
  }
  else if (err) {
    throw err;
  }
});

function addList(todos) {
  fs.writeFile('list.txt', todos, (data, err) => {
    if (data) {
      console.log('New task added!');
    }
    else if (err) {
      throw err;
      console.log('Failed!');
    }
  });
  listArray.push(todos);
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
    addList(task);
  }
}
main();
