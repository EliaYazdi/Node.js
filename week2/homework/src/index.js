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
    console.log('failed!');
  }
});

const listArray = [];
listArray.push(readList);

function addList(myList, todos) {
  fs.writeFile('list.txt', myList, (data, err) => {
    if (data) {
      console.log('New task added!');
    }
    else if (err) {
      throw err;
      console.log('Failed!');
    }
  });
  myList.push(todos);
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
    addList(listArray, task);
  }
}
main();
