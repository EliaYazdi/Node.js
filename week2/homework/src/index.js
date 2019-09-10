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
}

const command = process.argv[2]; // add your todo list in command line

function main() {
  if (command === 'help') {
    console.log(readHelp);
  }
  else if (command === 'list') {
    console.log(readList);
  }
  else if (command === 'add') {
    addList(command);
  }
}
main();
