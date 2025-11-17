// const title = document.getElementById('main');
// const items = document.querySelectorAll('.list-item');
// console.log(title,items);

// const firstName = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');


// firstName.style.textTransform = "uppercase";
// firstName.style.fontFamily = "sans-serif";
// firstName.style.fontSize = "35px";
// firstName.style.fontWeight = "bold";
// lastName.style.color = "#ffffff";
// lastName.style.backgroundColor = "#242424";
// lastName.style.textTransform = "uppercase";
// lastName.style.fontFamily = "sans-serif";
// lastName.style.fontSize = "35px";

// const firstName =  oneName.split(' ',1);
// const lastName =  oneName.split(' ');
// console.log(firstName,lastName);

const oneName = document.getElementById('one-name');
let count = 0;

let timer = setInterval(()=>{
   oneName.innerText = ++count;
//    if(count == 100){
//     clearInterval(timer);
//    };
},1000);

