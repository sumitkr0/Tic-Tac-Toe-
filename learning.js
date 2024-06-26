const profile={
    name: 'Alex',
    age: 25,
    isMale: true,
};
// console.log(profile);         

let a=10;
let b=20;
c=a+b;
// console.log(c);

// conditional statements

// let age=4;
// if(age>=18){
    console.log('You are eligible to vote');
// }
// else{
    console.log('You are not eligible to vote');
// }


let name='sagar';
if (name=='Alex'){
    // console.log('Hello Alex');
}   
else{
    // console.log('Hello Guest');
}


let num=161;

if (num%2===0){
    // console.log('Even number');
}else{
    // console.log('Odd number');
}


let age=75;
if(age<18){
    // console.log('You are a minor');
}
else if(age>=75){
    // console.log('You are going to diee');
}
else if (age>60){
    // console.log('You are a senior citizen');
}
else{
    // console.log('You are an adult');
}



// let age=15;
// let raman;
// if(age==18){
//     raman='You are 18';}
//     else if (age==16){
//         raman='You are 16';}
//         else{
//             raman='You are not 16 or 18';
//         }
        // console.log(raman);


// let year=2020;
// let result = year>=2020 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(result);

// let vscode = prompt('What is your name?');   
// console.log(vscode); 

// for loop
 for (let count=1; count<=1000; count++){
    //  console.log("sagar");
 }

//  sum of 1 to 100
let sum=0;
for (let i=1; i<=100;i++){
    sum=sum+i;
}
// console.log(sum);

for (let i=1; i<=10; i++){
    // console.log(i);
}

// infinite loop.
// for(let i=1; i>=0; i++){
    // console.log(i);
// }

// while loop
let i=1;
while(i<=100){
    // console.log("i=",i);
    i++;
}

let j=1;
for(let j=1; j<=100; j++){
    // console.log("j=",j);
}

// printing even numbers in 1 to 100
let k=1;
while(k<=100){
    if(k%2==0){
        // console.log(k);
    }
    k++;
}

// creating a number gamee
// let secretNumber=7;

// let userNumber= prompt("guess the number");
// while(userNumber!=secretNumber){
//  userNumber= prompt("guessed the wrong number");
// }
// console.log("You guessed the number");  

let str='Hello';
// console.log(str.toUpperCase());

// array    
let marks=[10,20,30,40,50];      
let sumMarks=(marks[0]+marks[1]+marks[2]+marks[3]+marks[4]);
let avgMarks=sumMarks/marks.length;
// console.log(avgMarks);

// splice method

// let array=[1,2,3,4,5,6,7,8,9,10]; 
// function value (){
// let array=[1,2,3,4,5,6,7,8,9,10]; 
//     array.splice(2,3,101,102);
//     console.log(array);
// }
// value();   
// let ravi= array;
// console.log(ravi);
// let splce=array.splice(2,3,101,102);
// console.log(splce);

// push method
let arr=[1,2,3,4,5];
arr.push(6);    
// console.log(arr);

// function
function sagar(){
    // console.log('Hello Sagar');
    // console.log('Hello Sagar');
    // console.log('Hello Sagar');
    // console.log('Hello Sagar');
}   
sagar();

// arrow function
const arrowMultiply=(a,b)=>{
    // console.log(a*b);
}


let array=[1,2,3,4,5,6,7,8,9,10]; 
let newArray=array.map((val)=>{
    return val*2;
});
console.log(newArray);  

let numbers=[85,90,95,81,99];

let result=numbers.filter((val)=>{
    return val>=90;
});
console.log(result);    

// reduce method

let numbers1=[1,2,3,4,5];
let sum1=numbers1.reduce((acc,val)=>{
    return acc+val;
});
console.log(sum1);