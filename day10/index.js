let arr=[11,23,33,35,55]

// let filterdarr=arr.filter((item)=>item!=30);
// console.log(filterdarr);
// let sum=arr.reduce((acc,curr)=>acc+curr,1000);
// // acc    curr
//  //  0      10
// // 10     20
// console.log(sum);
// let founditem= arr.find((item)=> item>20);
// let foundindex= arr.findIndex((item)=> item>20)
// console.log(founditem)
// console.log(foundindex)

// let haseven=arr.some((item)=> item%2===0);
// console.log(haseven)

// let evenarr=arr.every((item)=>item%2===0)
// console.log(evenarr)

// let obj={
//     firstname:"himanshu",
//     lastname:"kalal"
// }

// let keys= Object.keys(obj);
// let values= Object.values(obj);
// let entries= Object.entries(obj);
// let keys= Object.keys(obj);
// console.log(keys);
// console.log(values);
// console.log(entries);
// obj.freeze(obj)
// obj.firstname="vinay";
// console.log(obj);

// const object1={
//     firstname:"himanshu",
//     lastname:"kalal"
// }
// object1.firstname="vinay";
// console.log(object1);
// //we can initialize variables in the const object but we cant change the value of const object
// let obj = {
//     firstname:"himanshu",
//     lastname:"kalal"
// }
// Object.seal(obj);//in seal new propertise can be added
// obj.firstname ="harsh"
// obj.latname="kawadia"
// console.log(obj);

// console.log(obj.hasOwnProperty("gender"));


// string mehtods

// let str="hello world"
// // // let char =str.charAt(7);
// // // console.log(char);
// // let newStr= str.concat(" techno");
// // console.log(newStr);
// let hasworld=str.includes("world");
// console.log(hasworld);
// let index= str.indexOf("o");
// console.log(index);
// let slicedarr= str.slice(1,4);
// console.log(slicedarr);
// let substr= str.substring(4,8);//always count negative values as zero
// console.log(substr);
// let str="   hello    world";
// console.log(str.length);

// let trimmedstr= str.trim();
// console.log(trimmedstr.length)

// let str= "hello world"

// let splittedstr=str.split(" ")
// console.log(splittedstr)


//math object
// let num= Math.random();
// console.log(num);

// let num1=10.6343;
// console.log(Math.round(num1));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));
function generateotp(){
// let digit=123456789
let randomnumber= Math.floor(1000+Math.random()*9000);// 1000-9999
console.log(randomnumber)
}
generateotp();