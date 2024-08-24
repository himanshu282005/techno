//date ,rest, spread, dom
//  let date=new Date();

// // console.log(date.getDay());//1-7
// // console.log(date.getMonth());//0-11
// // console.log(date.getFullYear()) 
// console.log(date.getTime()%10000);
// // console.log(date.getSeconds());
// // console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// //Destructing
// let arr=[10,20,30,40,50]
// // let [num1,num2]=arr;
// // console.log(num1,num2)
// // let [nums1, ,nums3]=arr;
// let [num1 , ...newArr]=arr;//rest operator always use in the end 
// console.log(newArr)


//object destructing

let obj={
    firstname:"himanshu",
    lastname:"kalal",
    address:"kundalgarh",
    gender:"male"
}
let {firstname:a,address}=obj;
console.log(a)
// let obj1={};
// obj1[firstname]="xyz"
// obj1[address]="udaipur"
// console.log(obj1);

// let arr1=[10,20,30]
// let arr2=arr1;
// console.log(arr2)
// arr2.push(1000)
// console.log(arr1===arr2)//due to reference gives true in answer

// let num1=20;
// let num2=num1;
// num2=+10;

// console.log(num1===num2)//due to intiialization gives false 
// let arr1=[10,20,30]
// let arr2=[10,20,30]
// arr1.push(1000)
// console.log(arr1===arr2);
// //spread operator

// let arr1=[10,20,30]
// let arr2= [...arr1];
// arr1.push(1000)
// console.log(arr1===arr2)
// console.log(arr1,arr2)
// let arr3=[...arr1,...arr2]
// console.log(arr3)

let obj1={
    firstname:"himanshu",
    lastname:"kalal"

}
let obj2={
    address:"jaipur",
    gender:"male"
}

let obj3={...obj1 ,...obj2,section:"fsd"}
console.log(obj3)

//we can visit website javascript info for more extra thing to learn
//DOM- document object model
