'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

import {onEvent , getElement, select } from "./utils.js";
import {Shape} from "./Shape";


const btn = select('.btn');
const info = select('.info');

onEvent('click' , btn, function(event){
    event.preventDefault();
    info.innerText = 'working';
});














