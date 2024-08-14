//conditional statements, loops
console.log(!10);
//if else,switch,ternary operators
//functions
//loops
// let count=20;
// if (count==20){
//     console.log("the count is 20");
// }
// else{
//     console.log("the count is not 20");
// }
// let count=20;
// if (count==20){
//     console.log("the count is 20");
// }
// else if (count>20){
//     console.log("the count is greater than 20");
// }
// else if (count<20){
//     console.log("the count is less than 20");
// }

// let firstnumber=prompt("enter the first number");
// console.log(firstnumber);
//prompt the user to enter their username and passoword
//if username is "admin" and passowrd is 123 in numbers
//if both condition is true then display "auth succwsful" else "auth failed"
// Prompt the user to enter their username and password
// let username = prompt("Enter your username:");
// let password = +prompt("Enter your password:");

// Check if the username is "admin" and the password is 123
// if (username == "admin" && password == "123") {
//     console.log("auth successful");
// } else {
//     console.log("auth failed");
// }

//ternary operators
// (username === "admin" && passowrd === 123) ? console.log("auth succesful"):console.log("auth failed");4
// let daynumber=3;
// let dayname;
// switch (daynumber){
//     case 1:
//      dayname ="monday";
//      break;
//     case 2:
//     dayname ="tuesday";
//     break;

//     case 3:
//     dayname ="wednesday";
//     break;
    
//     case 4:
//     dayname ="thrusday";
//     break;

//     case 5:
//     dayname ="friday";
//     break;
       
//     case 6:
//     dayname ="saturday";
//     break;
    
//     case 7:
//     dayname ="sunday";
//     break;

//     default:
//     console.log("invalid number");
    
//     }
// console.log(dayname);

// //functions
// let sum = function(){
//     console.log("thisd iws functions experession");
// }

//arrow function
// let add=()=>{
//     console.log("this is arrow function");
// }

// sum();

// let sub= (a,b)=>{
//     return a-b;
// }

// let sub= (a,b)=>a-b;
// let result=sub(20,10);
// console.log(result);

//2nd difference between var let const
//global scope/local scope or function scope
//es6 block scope =if,else
//var-global scope variable but in case of function it becomes local scope variable
//let & const -block scope variable
// {
//     var a=20;
// }
// {
//     var a="shubham";
// }
// console.log(a);
// {
//     var a=20;
// }
// {
//     var a="shubham";
// }
// console.log(a);

// function sum(){
//     var a=20;
//     return a;
// }
// console.log(sum());



//array and objects
// let arr=[10,20,30,40,50];

// console.log(arr[arr.length-1]);

// let nestedarr=[10,20,30,40,50,[1,2,3,4,5],[20,30,40,["aaa","aab",[true,false]]]];
// let newarr1=nestedarr[nestedarr.length-1]
// let newarr2=newarr1[newarr1.length-1];
// let newarr3=newarr2[newarr2.length-1];
// console.log(newarr3[1])



//objects
let obj={
    firstname:"shubham",
    lastname:"jain"
}
console.log(obj.firstname)
obj.section="fsd";
console.log(obj)

console.log(obj["firstname"])

let keyname="address";

obj[keyname]="jaipur";
console.log(obj);