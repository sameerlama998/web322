// console.log('Hello World!');
// console.time("loop");

// for (i=0; i < 1000000; i++){

// }
// console.timeEnd("loop");
// // console.log("Hello World");

// setTimeout(function(){
//     console.log("Hello")
// }, 5000);

// console.log("world");

// let count =1;
// let maxCount = 5;

// let myCountInterval = setInterval(function() {
//     console.log('hello after' + count = count + 2 + 'second(s');
//     checkMax();
// }, 2000);


// let checkMax = function(){
//     if (count > maxCount){
//         clearInterval(myCountInterval);
//     }
// }

// require('./add.js');
// console.log("Hello World");


class student{
    name; 
    id;
    course;
   

constructor(setName = '', setID = 0, setCourse =''){
    this.name = setName;
    this.id =setID;
    this.course = setCourse;
}

setName(newName){
    this.name = newName;

}

setId(newID){
    this.id = newID;

}

setCourse(newCourse){
    this.Course = newCourse;
}

getName(){
    return this.name;
}

getId(){
    return this.id;
}

getCourse(){
    return this.Course;
}


}

let student = new Student('abc', 100, 'CPP');
console.log(student.name);