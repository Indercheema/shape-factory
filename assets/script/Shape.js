'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

class Shape{
    constructor(shape, color) {
        this._shape = shape;
        this._color = color;
    }

    get color(){
        return this._color;
    }

    set color(val){
        this._color = val;
    }

    get shape(){
        return this._shape;
    }

    set shape(val){
        this._shape = val;
    }
    info(){
        return `${this._color + this._color} ${this._shape + this._shape}`;
    }
}

const myColors = {
    blue: "#0f9",
    green: "#9f0",
    orange: "#f90",
    pink: "#f09",
    purple: "#90f"
};

export {Shape};
