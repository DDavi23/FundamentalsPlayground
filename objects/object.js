
	var friend = {
		firstName : "Danyel",
		lastName : "Davis",
		age: 39

	};

	document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age
	document.getElementById("name").innerHTML =friend.firstName


	var houseOfCards = {
		showname : "House of Cards",
		episodeNo : 1,
		episodeDesc : "The viewer is introduced to the nefraious ways of Frank Underwood."
	};

	document.getElementById("show-name").innerHTML = houseOfCards.showname;
	document.getElementById("episode-number").innerHTML = houseOfCards.episodeNo;
	document.getElementById("episode-description").innerHTML = houseOfCards.episodeDesc;





var netflixShow = {

	//Properties
	ShowName : "",
	EpNumber: 1,
 	EpDesciption : "", 

 	//Methods
 	watchNow : function(){
 		alert("You are now queueing up " + this.showName + " " +this.epNumber);
 	}
}

var drWho = Object.create(netflixShow);
drWho.showName = "Dr. Who";
drWho.epNumber = 1;
drWho.EpDescription ="Mannequins come alive.";
};

document.getElementById("show").innerHTML = drWho.Showname;
document.getElementById("episode-num").innerHTML = drWho.Episode#;
document.getElementById("episode-desc").innerHTML = drWho.EpisodeDescription;
document.getElementById("status").innerHTML = drWho.status
/******************************More complex object literals*****************/

var amazonPrimeShow = {
	//PROPERTIES
	showId      : 1,
	name        : "Danyel's Happiest Times",
	description : "This is the happiest show on the planet",
	seasonInfo  : {
	    seasonNumber: 1,


	printDetails : function(){
		document.write(description);
	    
	},

	    episodes     : [
	        {episodeNumber: 1, episodeName: "Happy Stuff"},
	        {episodeNumber: 2, episodeName: "The Real Happy Story of Danyel"},
	        {episodeNumber: 3, episodeName: "Even happier than before"}
        ]
    },
};

document.write(amazonPrimeShow.seasonInfo.episodes[0].episodeName);




