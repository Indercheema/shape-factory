'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

    Basic calculation
*/
// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}
const clock = select('.clock');
const setAlarm = select('.alarm-time');
const alarm = select('.alarm');
const input = select('input');
const error = select('.message');


const sound = new Audio('./assets/audio/alarm.wav');
sound.type = 'audio/wav';
sound.loop = false;

function localTime() {
    const currentTime = new Date();
    let hours = (currentTime.getHours()).toString().padStart(2, '0');
    let mintues = (currentTime.getMinutes()).toString().padStart(2, '0');
    let seconds = (currentTime.getSeconds().toString().padStart(2, '0'));
    let time = hours + ':' + mintues + ':' + seconds;
    let myTime =  hours + ':' + mintues;

    clock.innerText = time;

    
    
    if (myTime == setAlarm.innerText) {
        sound.play();
    }

}
setInterval(localTime, 1000);
localTime();

function isValid(input){   
    if (Number.isInteger(input)) {
        return true;
    }
    return false;
 }

onEvent('click', alarm, function() {
    let timeReg =  /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;


    if (timeReg.test(input.value)) {
        setAlarm.innerText = input.value;
    }
    else if (!isValid(Number(input))) {
        setAlarm.innerText = 'Please Enter time in proper format. Example hh:mm'
    }

    else if (input.value.length == '') {
        setAlarm.innerText = 'Please Enter time in proper format. Example hh:mm'
    }
    else if (input.value == localTime()) {
        setAlarm.innerText = 'Cannot set alarm at current time';
    }
    
})












