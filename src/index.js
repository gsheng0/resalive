import React from 'react';
import ReactDom from 'react-dom';
import Works from './components/Works';

let elements = document.getElementsByClassName("fade");
let onScreenArr = [];
let isLoadedArr = [];

function init(){
    for(let i = 0; i < elements.length; i++){
        onScreenArr.push(isOnScreen(elements[i]));
        isLoadedArr.push(false);
    }
    updateOnScreenArr("nothing");
    for(let i = 0; i < onScreenArr.length; i++){
        if(!onScreenArr[i]){
            elements[i].style.opacity = 0.0;
        }
        else{
            elements[i].style.opacity = 1.0;
            isLoadedArr[i] = true;
        }
    }
    ReactDom.render(<Works />,  document.getElementById("works"));
    // ReactDom.render(<h1>demo area</h1>, document.getElementById("demo"));
    // ReactDom.render(null, document.getElementById("demo"));
}

function isOnScreen(element) {
	var position = element.parentElement.getBoundingClientRect();
    var height = element.offsetHeight;

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		return true;
	}

	if(position.top > -1 * height/2 && position.bottom < window.innerHeight + height/2) {
		return true;
	}
    return false;
  }


function updateOnScreenArr(e) {
    for(let i = 0; i < elements.length; i++){
        onScreenArr[i] = isOnScreen(elements[i]);
    }
}


init();

