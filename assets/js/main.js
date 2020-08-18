// console.log('Test Log');
// console.warn('Test Warn');
// console.error('Test Error');
// console.info('Test Info');

let name = 'Dheena';
let age = 27;
let height = 5.6;
let bool = true;
let nul = null;
let undef = undefined;

const greeting = 'Hello World';

console.log(typeof name);
console.log(typeof age);
console.log(typeof height);
console.log(typeof bool);
console.log(typeof nul);
console.log(typeof undef);

// concotenation
console.log(`I'm ${name}, ${age} years old.!`);
console.log(greeting.substring(0,5).toUpperCase());
console.log(greeting.split(' '));

const animals = ['cow','goat','cat','dog'];
console.log(Array.isArray(animals));
animals.unshift('Meerkat');
animals.push('Lion');
// animals.pop();
console.log(animals);

// objects
const Person_obj = {
    person_name: 'Dheena',
    person_age: '27',
    person_hobbies:['Movies', 'Gaming', 'Riding'],
    person_address:{
        street: 'Kammalar Street',
        city: 'vpm',
        state: 'TN'
    }
}
console.log(Person_obj);
// console.log(Person_obj.hobbies[2]);
// console.log(Person_obj.address.street);

const {person_name, person_age, person_hobbies} = Person_obj; // pulling data from object
console.log(person_hobbies[1]);

Person_obj.person_email = 'amigodheena@gmail.com'; //insert data to object
console.log(Person_obj);

const todo = [
    {
    id: 1,
    program: "Client call",
    isCompleted: false
    },
    {
    id: 2,
    program: "Office Meeting",
    isCompleted: false
    },
    {
    id: 3,
    program: "Birthday Function",
    isCompleted: true
    }
];
// document.querySelector('.userlist').innerHTML = todo[1].program;
console.log(todo);

const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

//Method1
for (let i = 0; i < todo.length; i++) {
    const element = todo[i].program;
    console.log(element);        
    document.querySelector('.userlist').innerHTML = element;
}

//Method2
for(let todos of todo){
    console.log(todos.program);
}

//foreach, map , filter

//foreach        
    //normal function
    todo.forEach(function(todos){
        console.log(todos.id);
    });

    //arrow function
    todo.forEach(todos => {
        console.log(todos.id);
    });

//map
const todomap = todo.map(todos=>{
    return todos.program;
});
console.log(todomap);

//filter
const todofilter = todo.filter(todos=>{
    return todos.isCompleted === true;
}).map(todos=>{
    return todos.program;
});
console.log(todofilter);

// Conditional
let x = 10;
if(x ==10){
    console.log('x ix equal to 10');
}else if(x > 10){
    console.log('x is grater than 10');
}else{
    console.log('x is less than 10');
}

// Ternary Operator
const Ternary = x > 10 ? 'case1' : 'case2';
// console.log(Ternary);

switch(Ternary){
    case 'case1':
        console.log('x is grater than 10');    
        break;
    case 'case2':
        console.log('x is not grater than 10');
        break
    default:
        console.log('x is not grater or less than 10');
    break;
}

// function
function calc(num1, num2){
    return num1 + num2;
}
console.log(calc(10,2));

const calc1 = (num1,num2) => num1 + num2;
console.log(calc1(1,2));

const calc2 = (num1=1 ,num2=1) => {return num1 + num2;}
console.log(calc2(2,5));

// OOP
// function Person(name, city, dob ){
//     this.name = name;
//     this.city = city;
//     this.dob = new Date(dob);
// }

// Person.prototype.getdob = function(){
//     return this.dob.getFullYear();
// }

// class
class Person{
    constructor(name, city, dob){
        this.name = name;
        this.city = city;
        this.dob = new Date(dob);
    }
    getdob(){
        return this.dob.getFullYear();
    }        
}

const person1 = new Person('Dheena', 'VPM', '06-09-1993');
// console.log(person1.dob.getFullYear());
console.log(person1.getdob());

// DOM
console.log(document.getElementById('formid'));
let item = document.querySelectorAll('.item');

item.forEach(element => {
    console.log(element);
});

const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';
// ul.remove();    
ul.children[1].innerText = 'yoyo';
ul.lastElementChild.innerHTML = "<p>a</p>"

const btn = document.querySelector('.submit_btn');
// btn.style.background = 'red';

document.querySelector('.submit_btn').style.background ='green';

// btn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     console.log(e.target.className);
//     document.querySelector('.items').lastElementChild.innerHTML = "<b>Changed</b>"
// })

// Form validation
const form = document.querySelector('#formid');
const namefield = document.querySelector('#nameid');
const emailfield = document.querySelector('#emailid');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('.userlist');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(namefield.value === '' || emailfield.value === ''){
        msg.classList.add('error');
        msg.style.color = 'red';
        msg.innerHTML="Please fill all the fields";
        // setTimeout(() => {
            //msg.remove();
        // }, 3000 );  
        
        // setTimeout(() =>msg.remove(),3000 );

        setTimeout(function(){
            msg.remove();
        },3000);

    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${namefield.value}: ${emailfield.value}`));
        userlist.appendChild(li);
        console.log('Success');

        // clear field
        namefield.value = '';
        emailfield.value = '';
    }

}

// Basics over