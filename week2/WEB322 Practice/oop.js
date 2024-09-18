// object literal
let name = "NAME";
let age = 99;

let myObj = {
    name: "Bob",
    age: 22,
    school: "Seneca",
    registered: true,
    courses: ["web322", "oop244"],
    campus: {
        address: "123 Street",
        name: "Newnham"
    },
    getName: function(){
       return "Name: " + this.name + " age: " + this.age;  
    },
    outputNameDelay: function(delayMS){
        //let thisHolder = this;
        setTimeout(() => {
            console.log("Name: " + this.name + " age: " + this.age);
        }, delayMS);
    }
}

myObj.school = "Seneca Polytechnic";

// console.log(myObj.school);
// console.log(myObj.courses[1]); 
// console.log(myObj.campus.name);

// console.log(myObj.getName());
// myObj.outputNameDelay(1000);

class LimitedStudent {
    #registered;

    constructor(setRegistered = false){
        this.#registered = setRegistered;
    }

    getRegistered(){
        return "registered: " + this.#registered;
    }
}

class MyObj extends LimitedStudent{
    #name;
    #age;
    #school;

    constructor(setName = "", setAge = 0, setSchool = ""){

        super(true); // new instances of MyObj are always registered
        this.#name = setName;
        this.#age = setAge;
        this.#school = setSchool;
        // any other configuration you need to do here
    }

    get age(){
        return this.#age;
    }

    set age(newAgeVal){
        console.log("TODO: Validate new Age")
        this.#age = newAgeVal;
    }

    getName(){
        return "Name: " + this.#name + " age: " + this.#age;   
    }

    outputNameDelay(delayMS){
        //let thisHolder = this;
        setTimeout(() => {
            console.log("Name: " + this.#name + " age: " + this.#age);
        }, delayMS);
    }
}

let myObj1 = new MyObj("Bob", 22, "Seneca Polytechnic");
let myObj2 = new MyObj("Karen", 24, "Seneca Polytechnic");

myObj2.age = 99;

console.log(myObj2.getName());
myObj1.outputNameDelay(1000);
console.log(myObj1.getRegistered());

