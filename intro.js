/**
 * Team FluffyDollop
 * Tiffany Moi and Khyber Sen
 * SoftDev pd7
 * HW 16 -- Sequential Progression II: Electric Boogaloo
 * 2017-12-08
 */

(function() {
    "use strict";

    // iterate over an HTMLCollection as returned by element.children
    HTMLCollection.prototype.forEach = function(func) {
        const length = this.length;
        for (let i = 0; i < length; i++) {
            func(this[i], i, this);
        }
    };

    const heading = document.getElementById("h");
    const originalHeadingText = heading.innerText;

    const button = document.getElementById("b");

    const list = document.getElementById("thelist");

    // replace heading text w/ text of another element (a list item)
    const replaceHeadingText = function() {
        heading.innerText = this.innerText;
    };

    // restore heading text to original heading text
    const restoreHeadingText = function() {
        heading.innerText = originalHeadingText;
    };

    // remove an element (a list item)
    const deleteSelf = function() {
        this.remove();
    };

    // add all event listeners to an element (a list item)
    const registerItem = function(item) {
        item.addEventListener("mouseover", replaceHeadingText);
        item.addEventListener("mouseout", restoreHeadingText);
        item.addEventListener("click", deleteSelf);
    };

    // add another item to the list
    const addItem = function() {
        const item = document.createElement("li");
        item.innerText = "item " + list.children.length;
        registerItem(item);
        list.appendChild(item);
    };

    // add event listeners to each list item
    list.children.forEach(registerItem);

    // set button to add another list item
    button.addEventListener('click', addItem);

})();

// //====Add Element====
// const add = function() {
//     const element = document.getElementById("thelist");
//     const n = document.createElement("li");
//     n.innerText = "new item";
//     element.appendChild(n);
//     apply();
//     del();
// };
//
// const b = document.getElementById("b");
//
// b.addEventListener("click", add);
//
// //====Hover Over====
//
// const h = document.getElementById("h");
//
// const hover = function() {
//     h.innerText = this.innerText;
// };
//
// const out = function() {
//     h.innerText = "Hello World!";
// };
//
// const apply = function() {
//     const items = document.getElementsByTagName("li");
//     for (const item of items) {
//         item.addEventListener("mouseover", hover);
//         item.addEventListener("mouseout", out);
//     }
// };
//
// apply();
//
// //====DELETE====
//
// const remove = function() {
//     this.remove();
//
// };
//
//
// const del = function() {
//     const items = document.getElementsByTagName("li");
//     for (const item of items) {
//         item.addEventListener("click", remove);
//     }
// };

//del();


const arr = [1];

var triangle = function(n){
    if (n == 0){
	return arr[0];
    }
    if (n == 1){
	var line = new Array(1,1);
	arr.push(line);
	return line[0] + " " + line[1];
    }
    
    else{
	var last = arr[arr.length - 1];
	var line = [1];
	for (let i = 0; i < last.length - 1; i++) {
            line.push(last[i]+last[i+1]); //add up the two # above
        }
	line.push(1);
	arr.push(line);
	var ret = "";
	for (let i = 0; i < line.length; i++) {
            ret += line[i] + " ";
	    
        }
	return ret;
    }
};

var squares = function (n){
    var line = arr[n];
    console.log(line);
    var ret = 0;
    for (let i = 0; i < line.length; i++) {
        ret += line[i];
    }
    return ret;
};

triangle(0);
triangle(1);
triangle(2);
console.log(triangle(3));
console.log(squares(3));
