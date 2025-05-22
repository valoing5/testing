

// const body = document.querySelector('body');


// const p = document.createElement("p"); 
// p.textContent = "Hey I’m red!";

// body.appendChild(p); 



// const blue = document.createElement("h3"); 
// blue.textContent = "blue h3!";
// blue.style.color = 'blue';

// body.appendChild(blue); 


// const box = document.createElement("div"); 
// box.style.backgroundColor = 'pink';
// box.style["border-color"] = 'black'; 
// box.style.borderStyle = 'solid'; 
// box.style["padding"] = '2px';
// box.style["border-width"] = '2px';

// body.appendChild(box); 



// const heading1 = document.createElement("h1"); 
// heading1.textContent = "im in a div!";

// box.appendChild(heading1); 


// const p2 = document.createElement("p"); 
// p2.textContent = "me too!";

// box.appendChild(p2); 

// const link = document.querySelector("a");
// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org";

// const sect = document.querySelector('section'); 
// const para = document.createElement('p'); 
// para.textContent = 'we hope you'; 

// sect.appendChild(para); 

// const text = document.createTextNode('-- more text'); 
// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);

// sect.appendChild(text); // this moves the text node, it doesn't make a copy

// // sect.removeChild(text); 
// linkPara.remove(); 

const para = document.querySelector('p');
// para.style.color = 'blue'; 
// para.style.textAlign = 'center'; // these apply inline styling to html

// console.log(document.styleSheets);


para.setAttribute('class', 'highlight');