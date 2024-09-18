/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Sameer Bal Tamang Student ID: 159089226 Date: 9-13-2024
*
********************************************************************************/
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface(process.stdin, process.stdout);

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }

    const content = data.toString().replace(/\s+/g, ' ');
    const words = content.replace(/[^\w\s\']/g, "").split(' ');
    const longestWord = words.reduce((a, b) => a.length > b.length ? a : b);

    console.log(`Number of Characters (including spaces): ${content.length}`);
    console.log(`Number of Words: ${words.length}`);
    console.log(`Longest Word: ${longestWord}`);

    // Most repeated word
    const wordCounts = {};
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    const mostRepeatedWord = Object.entries(wordCounts).reduce((a, b) => a[1] > b[1] ? a : b);
    console.log(`Most Repeated Word: ${mostRepeatedWord[0]} - ${mostRepeatedWord[1]} times`);
  });
}

function processDirectory(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log(`Files (reverse alphabetical order): ${files.sort().reverse().join(', ')}`);

    // File sizes
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log(`${file}: ${stats.size} bytes`);
      });
    });
  });
}

function promptUser() {
  rl.question('Do you wish to process a File (f) or Directory (d): ', (answer) => {
    if (answer.toLowerCase() === 'f') {
      rl.question('File: ', (filePath) => {
        processFile(filePath);
        rl.close();
      });
    } else if (answer.toLowerCase() === 'd') {
      rl.question('Directory: ', (dirPath) => {
        processDirectory(dirPath);
        rl.close();
      });
    } else {
      console.log('Invalid Selection');
      promptUser();
    }
  });
}

promptUser();