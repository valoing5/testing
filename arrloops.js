// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';

// // loop starts here


// for (let p of people) {
    
//     if (p === "Phil" || p === "Lola") {
//         refused.textContent += p;
//         refused.textContent += ", ";

//     } else {
//         admitted.textContent += p;
//           admitted.textContent += ", ";
//     }
// }

// admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2)
// admitted.textContent += ".";

// // refused.textContent += ;
// // admitted.textContent += ;


// filter and reduce functions 

// const arr = [1, 2, 3, 4, 6];

// const product = arr.reduce((acc, curr) => acc * curr); // implicit return if arrow function has no {}


// console.log(product); 6 + 12 + 18


// // sumOfTripledEvens(array)
// const evens = arr.filter(num => num % 2 == 0); 
// const triples = evens.map(num => num * 3); 
// const ans = triples.reduce((acc, curr) => acc + curr); 
// console.log(ans); 


// function camelize(strr) {


//     const arrOfStrs = strr.split("-"); 
//     const formattedArr = arrOfStrs.map((str, idx) => {
//         // if (idx == 0) {
//         //     return str.at(0).toLowerCase() + str.slice(1); 
//         // } 

//         if (idx == 0) {
//             return str; 
//         } else {
//             return str[0].toUpperCase() + str.slice(1); 
//         }

//     });



//     return formattedArr.join(""); 
// }



// console.log(camelize("ss-ss"));




// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, min, max) {

//     for (let i = 0; i < arr.length; i++) {

//         let val = arr[i];

//         if (val > max || val < min) {
//             arr.splice(i, 1);
//             i--; 
//         }
//     }
// }

// filterRangeInPlace(arr, 4, 8); 

// console.log(arr); 


// // negative = first should come before, positive = first should come after 
// arr.sort((first, second) => {
//     return second - first; 
// })

// console.log(arr); 

function unique(arr) {
  /* your code */

  let res = []; 

  for (let str of arr) {
    if (!res.includes(str)) {
        res.push(str); 
    }
  }

  return res; 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); 



// // rest operators
// function test(...args) {

// }
