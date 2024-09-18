// arrow functions

// let adder = function(num1, num2){
//     return num1 + num2;
// };

// let adder = (num1, num2) =>{
//     return num1 + num2;
// };

// let adder = (num1, num2) => num1 + num2;

// let squared = num => num * num;

// let sayHello = () => console.log("hello");

// console.log(adder(1,2));
// console.log(squared(3));
// // sayHello();

// let myMap = new Map();

// myMap.set("a", 1);
// myMap.set("b", 2);
// myMap.set("c", 3);

// // for(let i = 0; i < myMap.length; i++){ // won't work
// //     console.log(myMap[i]);
// // }

// for( const [ key, value ] of myMap){
//     console.log("key: " + key + " value: " + value);
// }

// let myArray = ['A','B','C'];

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// myArray.forEach((element, index)=>{
//     console.log(element + " at index: " + index);
// });

// let newArray = myArray.map((element)=>{
//     return element + "!";
// });

// console.log(newArray);

// let sample1 = ['A', 'B', 'C'];
// let sample2 = ['D', 'E', 'F'];

// // let sample3 = [];

// // sample1.forEach((element) => sample3.push(element));
// // sample2.forEach((element) => sample3.push(element));

// let sample3 = [...sample1, ...sample2, "G", "H"];

// console.log(sample3);

// let product = {
//     id: '145be9',
//     price: 1.35,
//     onSale: false,
//   };
  
// console.log(product);

// let productWithStore = {...product, store: "downdown"};

// console.log(productWithStore);


// let myString = `Hello 
// World`; // or ' or ""
// console.log(myString);

// let a = 5;
// let b = 10;

// console.log(a + " + " + b + " = " + (a + b));

// console.log(`${a} + ${b} = ${a + b}`);


// const PI = 3.14;

// try{
//     PI = 99;
// }catch(err){
//     console.log(err.message);
// }

// console.log("haha, I tried to change the universe");


function divide(numerator, denominator){
    if(denominator == 0){
        throw new Error("Division By Zero");
    }
    return numerator / denominator;
}

try{
    console.log(divide(5,1));
    console.log(divide(5,0));
}catch(err){
    console.log(err.message)
}