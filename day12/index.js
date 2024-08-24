// // let mydiv = document.getElementById("main");

// // // Change the ID to 'container' (corrected typo)
// // mydiv.id = "container";

// // // Add a class name 'head'
// // mydiv.className = "head";

// // // Apply styles using direct style properties
// // mydiv.style.width = "200px";
// // mydiv.style.height = "200px";
// // mydiv.style.backgroundColor = "green"; // Corrected from "grenn" to "green"

// // // Log the current attributes of the div
// // console.log(mydiv.getAttribute("id"));    // Should log 'container'
// // console.log(mydiv.getAttribute("class")); // Should log 'head'
// // console.log(mydiv.getAttribute("style")); // Should log the inline styles

// // // Change the ID to 'text' using setAttribute
// // mydiv.setAttribute("id", "text");

// // // Apply additional styles using setAttribute
// // // Note: This will overwrite the previous inline styles set via .style properties
// // mydiv.setAttribute("style", "width: 200px; height: 200px; background-color: green;");
// // mydiv.setAttribute("style", "background-color: red;"); // This will overwrite the previous styles

// // // Demonstrating object manipulation (optional)
// // let obj = {
// //     id: "main",
// //     style: {
// //         width: "200px",
// //         height: "200px",
// //         backgroundColor: "green"
// //     }
// // };

// // obj.id = "container";
// // obj.style.borderRadius = "20px";

// // obj.id = "head";
// // obj.style = {
// //     backgroundColor: "red"
// // };

// // // **Key Correction Below**

// // // Incorrect Usage: Attempting to call innerHTML and innerText as functions
// // // console.log(mydiv.innerHTML())
// // // console.log(mydiv.innerText())

// // // **Correct Usage**: Accessing innerHTML and innerText as properties
// // console.log(mydiv.innerHTML); // Logs the HTML content inside the div
// // //console.log(mydiv.innerText); // Logs the text content inside the div
// // Array of different colors
// // const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

// // // Loop through the items and apply styles
// // for (let i = 1; i <= 8; i++) {
// //     // Select the div by its id
// //     let div = document.getElementById(`item${i}`);
    
// //     // Apply color from the array
// //     div.style.backgroundColor = colors[i - 1];
    
// //     // Apply a margin
// //     div.style.margin = "10px";
// //     div.style.height = "100px";
    
// //     // Apply a large border radius
// //     div.style.borderRadius = "30px"; // You can adjust this value for an even larger effect
// // }

// // console.log(document.getElementsByClassName("main")); // To check if the main div is being accessed
// // Select all elements with the class 'head'
// let mydiv = document.querySelectorAll(".head");

// // Create a new div element
// let newdiv = document.createElement("div"); // Fixed the typo
// newdiv.innerHTML = "hello techno"; // Fixed the typo in the string
// newdiv.style.backgroundColor = "brown"; // Fixed the typo

// // Append the new div to the element with id 'main'
// let mydiv2 = document.getElementById("main");
// mydiv2.appendChild(newdiv);

// // Insert the first 'head' element before the 'container' element
// let mydiv3 = document.getElementById("container"); // Fixed the typo in id
// document.body.insertBefore(mydiv, mydiv3);


//events in javascript 

// document.getElementById("button").onclick=function(){
//     let newdiv=document.createElement("div");
//     newdiv.style.length="100px"
//     newdiv.style.height="100px"
//     newdiv.style.backgroundColor ="yellow"
//     document.body.appendChild(newdiv);
// }
// document.getElementById("button").addEventListener("click", function() { // Fixed typos and syntax
//     let newdiv = document.createElement("div");
//     newdiv.style.width = "100px"; // Corrected 'length' to 'width'
//     newdiv.style.height = "100px";
//     newdiv.style.backgroundColor = "yellow";
//     document.body.appendChild(newdiv);
// });
document.getElementById("text1").addEventListener("change", function() {
    let fieldValue = document.getElementById("text1").value; // Corrected property name
    console.log(fieldValue);
});
