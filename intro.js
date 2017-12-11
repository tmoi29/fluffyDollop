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

    (function firstList() {

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
            item.addEventListener("mouseover", replaceHeadingText, false);
            item.addEventListener("mouseout", restoreHeadingText, false);
            item.addEventListener("click", deleteSelf, false);
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
        button.addEventListener('click', addItem, false);

    })();

    /**
     * A generator function that returns successive values for increasing unsigned integers.
     *
     * @callback Generator
     * @param {Number} an unsigned integer
     * @return {*}
     */

    /**
     * Creates a <div> containing a button that adds items to a list showing successive calls to generator.
     *
     * @param {Generator} generator a generator function that takes an unsigned integer and returns the value
     * @param {Boolean} showCall true if you want "<generator.name>(n) = " before each value
     * @returns {HTMLDivElement} the <div>
     */
    const addSequence = function(generator, showCall) {
        showCall = Boolean(showCall);

        // add <br><hr><br> before new div
        ["br", "hr", "br"]
            .map(tag => document.createElement(tag))
            .forEach(e => document.body.appendChild(e));

        const div = document.createElement("div");
        document.body.appendChild(div);

        const list = document.createElement("ol");
        div.appendChild(list);

        let i = 0;

        /**
         * Adds the next (i++th) value returned by generator to the <ol> list.
         */
        const addItem = function() {
            console.log("adding item");
            const item = document.createElement("li");
            if (showCall) {
                item.innerText = generator.name + "(" + i + ") = ";
            }
            item.innerText += generator(i++).toString();
            list.appendChild(item);
        };

        // create button, set text to function name, and add set onclick to addItem
        const button = document.createElement("button");
        div.appendChild(button);
        button.innerText = generator.name;
        button.addEventListener("click", addItem, false);

        return div;
    };

    /**
     * Create a fibonacci closure that generates successive fibonacci numbers
     * without re-computing them.
     *
     * @return {Generator} a function that generates successive fibonacci numbers
     *          based on how many times it was called.
     */
    const fibonacciWrapper = function() {
        let a = 0;
        let b = 1;

        /**
         * @returns {Number} the next fibonacci number
         */
        return function fibonacci(n) {
            const temp = a;
            a = b;
            b = a + temp;
            return temp;
        };
    };

    addSequence(function square(x) {
        return x * x;
    }, true);

    addSequence(fibonacciWrapper(), true);

})();

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
