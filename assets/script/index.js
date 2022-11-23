'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/
import {onEvent , getElement, select } from "./utils.js";
import {Shape} from "./Shape.js";



const btn = select('.btn');
const getInfo = select('.info');
const colorBox = select('.color');
const shapeBox = select('.shape');
const bigBox = select('.big-box');

// onEvent('click' , btn, function(event){
//     event.preventDefault();
//     info.innerText = 'working';
// });

const myColors = {
    blue: "#09f",
    green: "#9f0",
    orange: "#f90",
    pink: "#f09",
    purple: "#90f"
};


let count = 0;
const shapes = [];
onEvent('click', btn , function(event) {
    event.preventDefault();
    if(count >= 25)
        return;
    
    count += 1;
    let newDiv = document.createElement('div');

    let newArray = new Shape(shapeBox.value, colorBox.value)

    shapes.push(newArray);
    newDiv.classList.add(shapeBox.value);
    newDiv.style.backgroundColor = myColors[colorBox.value];
    newDiv.setAttribute('shapeType', count);


       onEvent('click', newDiv , (e) => {
        getInfo.innerText = `Unit : ${(shapes.indexOf(newArray) + 1)} ${shapes[e.target.getAttribute('shapeType')-1].getInfo()}`;
    });

    bigBox.appendChild(newDiv);

});


