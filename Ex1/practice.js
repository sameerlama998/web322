
// console.log("Hello World!");

// console.time("loop")

// for(let i = 0; i < 10000000; i++){

// }

// console.timeEnd("loop");

// console.log("done");


// console.log(process.pid);

// process.on("beforeExit", () => {
//     console.log("before exit");
// });

// console.log("I'm going to exit");

// console.log(__dirname);

// console.log(__filename);

// console.log("process exiting");

// setTimeout(function(){
//     console.log("Hello");
// },1000);

// console.log("World");

// let helloCounter = 0;

// let ourInterval = setInterval(function(){
//     console.log("Hello");
//     helloCounter++;
//     if(helloCounter > 4){
//         clearInterval(ourInterval);
//     }
// },1000);

// let myURL = new URL('https://myProductInventory.com/products?sort=asc&onSale=true');

// console.log(myURL.searchParams);

// for (const [key, value] of myURL.searchParams) {
//     console.log('key: ' + key + ' value: ' + value);
//   }
  
  /*
  key: sort value: asc
  key: onSale value: true
  */

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('event', function () {
//   console.log('an event occurred!');
// });

// myEmitter.emit('event');

// const fs = require('fs');

// fs.readFile('names.csv', function (err, fileData) {
//     if (err) console.log(err);
//     else {
//       namesArray = fileData.toString().split(',');
//       console.log(namesArray);
//     }
//   });

// const fs = require('fs');

// fs.readdir('img', function (err, filesArray) {
//   if (err) console.log(err);
//   else {
//     console.log(filesArray);
//   }
// });

// const path = require('path');

// console.log('Absolute path to about.html');

// console.log(path.join(__dirname, '/about.html')); // with leading slash
// console.log(path.join(__dirname, '//about.html')); // with multiple leading slashes
// console.log(path.join(__dirname, 'about.html')); // without leading slash
// console.log(path.join(__dirname, '\about.html')); // with incorrect leading slash

// const readline = require('readline');

// const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question('First Name: ', function (fName) {
//   rl.question('Last Name: ', function (lName) {
//     rl.question('Class: ', function (className){
//         console.log('Hello: ' + fName + ' ' + lName + ' in class: ' + className);
//         rl.close();
//     });
//   });
// });



