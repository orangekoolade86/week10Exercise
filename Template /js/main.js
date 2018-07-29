// #4 creating object w/ four properties using literal notation

var cartoonCharacter1 = {

	name: "Bugs",
	species: "bunny",
	age: 73,
	image: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftheartmad.com%2Fwp-content%2Fuploads%2F2015%2F03%2FBugs-Bunny-Face-3.png&f=1",
	// return function
	doubleAge: function() {
		return this.age * 2
	}
} 

var cartoonCharacter2 = {

	name: "Daffy",
	species: "duck",
	age: 77,
	image:"https://img1.wikia.nocookie.net/__cb20120926230119/fantendo/images/0/03/DaffyDuck.png",
	// return function
	doubleAge: function() {
		return this.age * 2
	}
}

var cartoonCharacter3 = {

	name: "Porky",
	species: "pig",
	age: 77,
	image:"https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-pX8v_BJiiP0%2FT-0oncIHVbI%2FAAAAAAABwnE%2Fp6vmn0_AWLM%2Fs1600%2FPorky%2BPig.png&f=1",
	// return function
	doubleAge: function() {
		return this.age * 2
	}
}

console.log (cartoonCharacter1.doubleAge(), cartoonCharacter2.doubleAge(), cartoonCharacter3.doubleAge());


// #5 using object w/ four properties using constructor notation

function Characters (name, species, age, image) {

	this.name = name;
	this.species = species;
	this.age = age;
	this.image = image;
	// return funtion
	this.doubleAge = function() {
		return this.age * 2;
	};
	

}

var conToon1 = new Characters("Bugs","bunny", 73, "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ftheartmad.com%2Fwp-content%2Fuploads%2F2015%2F03%2FBugs-Bunny-Face-3.png&f=1",);
var conToon2 = new Characters("Daffy","duck", 77, "https://img1.wikia.nocookie.net/__cb20120926230119/fantendo/images/0/03/DaffyDuck.png",);
var conToon3 = new Characters("Porky","pig", 77, "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-pX8v_BJiiP0%2FT-0oncIHVbI%2FAAAAAAABwnE%2Fp6vmn0_AWLM%2Fs1600%2FPorky%2BPig.png&f=1",);


console.log (conToon1, conToon2, conToon3);

// console.log (conToon1.doubleAge(), conToon2.doubleAge(), conToon3.doubleAge());

// #8 adding constructor notation into an array
var charactersArray = [conToon1, conToon2, conToon3];


// #9 forloop through an array of objects
for (var i = 0; i < charactersArray.length; i++) {

	var newDiv = document.createElement("div");
	var newH1 = document.createElement("h1");
	var newH2 = document.createElement("h2");
	var newP = document.createElement("p");
	var newImg= document.createElement("img");
	var newSpan= document.createElement("span");

console.log( newDiv, newH1, newH2, newP, newImg, newSpan);


// #10 Creating text nodes for each content

	var newH1Text = document.createTextNode(charactersArray [i].name)
	var newH2Text = document.createTextNode(charactersArray[i].species)
	var newPText = document.createTextNode("Age:" + charactersArray[i].age)
	var newSpanText = document.createTextNode("Doubled  Age " + charactersArray[i].doubleAge());


console.log(newH1Text, newH2Text, newPText, newSpanText);

	newH1.appendChild(newH1Text);
	newH2.appendChild(newH2Text);
	newP.appendChild(newPText);
	newSpan.appendChild(newSpanText);






// #11 adding source attributes to elements

newImg.src = charactersArray[i].image;
newImg.alt = charactersArray[i].name + " " + charactersArray[i].species;

// #12 adding elements to HTML

newDiv.appendChild(newH1);
newDiv.appendChild(newH2);
newDiv.appendChild(newP);
newDiv.appendChild(newSpan);
newDiv.appendChild(newImg);



document.getElementById("display").appendChild(newDiv)

}












































