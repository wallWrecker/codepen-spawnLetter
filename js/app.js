$(".alert").alert("Hello World, Alert is working");
console.clear();

// get select box
const guideInfo 	= document.querySelector("#guide-info");
const selection 	= document.querySelector("#selection");
const input 			= document.querySelector("#input");
const submit 			= document.querySelector("#submit");
const root 				= document.querySelector("root");

const spawnLetter = {
  message: "",
  defaultLen: 5,
  letterStorage: [],
  letterCollection: [
  	"a","b","c","d","e","f","g","h","i","j","k",
  	"l","m","n","o","p","q","r","s","t","u","v",
  	"w","x","y","z",1,2,3,4,5,6,7,8,9,0,
  ],
  
  generateArrayLetter: function (len) {
    len = typeof len == "undefined" ? (len = this.defaultLen) : len;
    // Refactor mySelect codesnippets below..
    const temporaryArrray = [];
    for (let count = 1; count <= len; count++) {
      let random = Math.floor(Math.random() * Math.floor(this.letterCollection.length));
      temporaryArrray.push(this.letterCollection[random]);
    }

    return temporaryArrray;
	    // Refactor code here...
  },

  translateToNumeric: function (data) {
    // data as a parameter to mySelect must be an array.
    // First Check if the argument is an array and also if it's contains numbers not letters.
    
    // const isArray  = Array.isArray(data);
    // const isPassed = data.every((item) => typeof item != "number");

    // if (isArray == false || isPassed == false) {
    //   this.message = "Cannot process data: you provided incorrect data";
    //   return this.message;
    // }
    // 	Do the necessary things.
    const newArray = data.map((item) => this.letterCollection.indexOf(item));
    return newArray;
  },

  sampleMessage: function () {
    return "Hello There!";
  },
};
	
console.log(spawnLetter.generateArrayLetter(10));

const storeName = {
  my_torage: [],
  save_data: function (data) {
    data = typeof data == "undefined" ? (data = "Johnny") : data;
    this.myStorage.push(data);
  },

  seeStorage: function () {
    return this.my_storage;
  },
};

window.onload = function () {
  listenToSelect(selection);
};

selection.onchange = function () {
  listenToSelect(selection);
};

function listenToSelect(mySelect) {
  return interaction.updateGuideInfo(mySelect.value);
}

const interaction = {
	// Properties
	textBox   : document.querySelector("#input"),
  guideInfo : document.querySelector("#guide-info"),
  
  // Methods
  updateGuideInfo : function (currentSelected, isActivate) {
    const isTrue = this.isActivated(isActivate);
    switch (currentSelected) {
      case "title":
        if (isTrue) {
          this.changeTitle(this.textBox.value);
          return;
        }
        this.guideInfo.innerHTML = "Enter your title to the inbox";
        this.textBox.removeAttribute("readonly");
      break;

      case "generate":
         if (isTrue) {
         	console.log(spawnLetter.generateArrayLetter(100));
          return;
         }
        this.guideInfo.innerHTML = "Click the submit button to generate array";
        break;

      case "translate":
        if (isTrue) {
          // grab a method out of interaction object
          spawnLetter.translateToNumeric(this.textBox);
          return;
        }
        this.guideInfo.innerHTML = "Enter a sequence of number on the text field Example: 1,2,3,4,5 with comma's (,)"
        this.textBox.removeAttribute("readonly");
        break;

      default:
        // do this instead, after all the cases are evaluated to false.
        this.guideInfo.innerHTML = "Please select what to do in selection.";
        this.textBox.setAttribute("readonly","");
    }
  },

  isActivated: function(isActivated) {
    if (isActivated == true) {
      return true;
    }
    return false;
  },

  changeTitle: function(string) {
  	document.title = string;
  	alert("Title is has been change to: " + string);
  },
  
  defaultInput: function() {
  	this.textBox.setAttribute("readonly","");
  }
}

submit.onclick = function() {
	// Check what value has been selecter
	const current = selection.value;
	interaction.updateGuideInfo(current, true);
}


// TEST CODEs
const dummy 		= document.getElementById("dummytext");
const myLetter 	= ["h","v","s",1,2];
const indexes 	= spawnLetter.translateToNumeric(myLetter);
console.log(indexes);
console.log(spawnLetter.letterCollection[7]);