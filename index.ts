// Import stylesheets
import './style.css';

// Write TypeScript code!
let objSent = {title: 'Djay7', val: 46}

let existObj = [
  {title: 'Djay5', val: 23},
  {title: 'Djay6', val: 24},
  {title: 'Djay7', val: 25},
  {title: 'Djay7', val: 26},
  {title: 'Djay7', val: 27},
  {title: 'Djay8', val: 28}
]

function demo(itObj , objSent){
  let index =  itObj.map(el=>el.title).lastIndexOf(objSent.title);
  console.log(index);
  itObj.splice(index+1, 0, objSent);
}

demo(existObj, objSent);
console.log(existObj);