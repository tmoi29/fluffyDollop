//Team FluffyDollop
//Tiffany Moi and Kyber Sen
//SoftDev1 pd7
//HW16 -- Sequential Progression
//2017-12-08


//====Add Element====
var add = function (){
    var element = document.getElementById("thelist");
    var n = document.createElement("li");
    n.innerText = "new item";
    element.appendChild(n);
    apply();
    del();
};

var b = document.getElementById("b");

b.addEventListener("click", add);

//====Hover Over====

var h = document.getElementById('h');

var hover = function(){
    var txt = this.innerText;
    h.innerText = txt;
};

var out = function(){
    h.innerText = "Hello World!";
};

var apply = function(){
    var items = document.getElementsByTagName("li");
    for (item of items){
	item.addEventListener("mouseover", hover);
	item.addEventListener("mouseout", out);
    };
};

apply();

//====DELETE====

var remove = function(){
    this.remove();  
    
};


var del = function(){
    var items = document.getElementsByTagName("li");
    for (item of items){
	item.addEventListener("click", remove);
    };
};

del();

