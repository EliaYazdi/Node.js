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
listArray.join('\n');

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
  return listArray.join('\r\n');
}

function removeList(myList, todos) {
  fs.writeFile('list.txt', myList, (data, err) => {
    if (data) {
      console.log('New task added!');
    }
    else if (err) {
      throw err;
      console.log('Failed!');
    }
  });
  myList.splice((todos - 1), 1);// doesn't work well!
}

function reset() {
  fs.writeFile('list.txt', '', (data, err) => {
    if (data) {
      console.log('There should be no data here!');
    }
    else if (err) {
      throw err;
      console.log('Failed to reset your list!');
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
    addList(listArray, task);
  }
  else if (command === 'remove') {
    removeList(listArray, task);
  }
  else if (command === 'reset') {
    reset();
  }
}
main();
