//JS File
console.log("Hello World");


function add(x,y){
	console.log(x + y);
}

//Array


var classmates = ["Matt", "Tara", "Danyel", "Evan"];


for (var j= 0; j < classmates.length; j++) { 
    console.log(classmates[j]);
}
//OR//
for(var i in classmates){
	console.log(classmates[i]);
}

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";

console.log(classmates);
console.log(typesOfSoda);


var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];

/*save for later
sameType = Type.length,
    assignArrayGeneric = function(sameType) {
      if (!Array[sameType]) {
        var type = Array.prototype[sameType];
        if (typeof type === 'function') {
          Array[sameType] = function() {
            return type.call.apply(type, animals);
          };
        }
      }
    };

*/




/*
    var favoriteMovies = ["Lady Sings the Blues", "Are We There Yet", "33 Seconds"];

    for(var movie in favoriteMovies){
    	console.log(favoriteMovies[movie]);
    }
    console.log(favoriteMovies);

    for(var i=0; i <favoriteMovies.length; i++){
    	console.log(i);
    }

*/







/***********************************DO NOT GO ABOVE THIS LINE RIGHT NOW**************************************/
/***********************************THERE IS TOO MUCH FUN ABOVE**********************************************/

//OBJECT LITERAL
var friend = {

	//Properties
    fullname  :"",
    age       : 0,
    married   : true,
    vocation  : "",
	closeLikeABrother: true,
	yearsKnown    : 21,
	isDivorced: true,
	hasChildren: false

    //Method

    printVocation  : function(){
    	return this.vocation;
    },

    introduceToSisterInLaw : function(){
    	if(this.yearsKnown >= 5 && this.closeLikeABrother == true && this.married == false){
    		return "I want you to meet Lizzy.";
    	} else {
    		return "Have you tried Tinder?";
    	}
    },

}

var nickKirkes = Object.create(friend);
	nickKirkes.fullname = "Nick Kirkes";
	nickKirkes.age = 38;
	nickKirkes.married = false;

var hansKloepfer = Object.create(friend);
	hansKloepfer.fullname = "Hans Kloepfer";
	hansKloepfer.age = 42;
	hansKloepfer.married = false;

var keshaGlass = Object.create(friend);
	    keshaGlass.fullname = "Kesha Glass";
	    keshaGlass.age = 39;
	    keshaGlass.married = false;
	    keshaGlass.vocation = "Accountant";

	    






