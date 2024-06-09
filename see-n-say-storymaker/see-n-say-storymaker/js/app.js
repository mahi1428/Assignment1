// /* Variables
// -------------------------------------------------- */
// // Create a new speechSynthesis object
var synth = window.speechSynthesis;
 // Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
 var textToSpeak = 'This is the text string that you will generate with your script';
 var speakButton = document.querySelector('button');


// //Query Selectors
 var btnNouns = document.querySelector('#nouns');
var btnVerbs = document.querySelector('#verbs');
 var btnAdjective = document.querySelector('#adjectives');
 var btnAnotherNouns = document.querySelector('#another-nouns');
 var btnPlaces = document.querySelector('#places');
 var btnSpeaknow = document.querySelector('#speaknow');
 var fullText = document.querySelector('p');
 var reset = document.querySelector('#reset');


 //Arrays
 var arrayNouns = ["The turkey", "Mom", "Dad", "My teacher", "The elephant", "The cat"];
var arrayVerbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed" ];
 var arrayAdjective = ["a funny", "a scary", "a goofy", "a slimy", " a barking", "a fat"];
 var arrayAnotherNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
 var arrayPlaces = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

 var randomNouns = randomWord(arrayNouns);
 var randomVerb = randomWord(arrayVerbs);
 var randomAdjective = randomWord(arrayAdjective);
 var randomAnotherNoun = randomWord(arrayAnotherNouns);
 var randomPlace = randomWord(arrayPlaces);

 var full = [];

 /* Functions
 -------------------------------------------------- */
 function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
 	var utterThis = new SpeechSynthesisUtterance(string);
 	// Actually speak the text
 	synth.speak(utterThis);
 }

 function randomWord(array) {
 	return array[Math.floor(Math.random() * array.length)];
 }



/* Event Listeners
 -------------------------------------------------- */
 // Onclick handler for the button that speaks the text contained in the above var textToSpeak

 speakButton.onclick = function () {
 	speakNow(textToSpeak);
 }


 btnNouns.onclick = function () {
 	textToSpeak = randomWord(arrayNouns);
 	speakNow(textToSpeak);
 	full.push(textToSpeak);
 	fullText.innerHTML = textToSpeak + " ";
 }

 btnVerbs.onclick = function () {
 	textToSpeak = randomWord(arrayVerbs);
 	speakNow(textToSpeak);
 	full.push(textToSpeak);
 	fullText.innerHTML = textToSpeak + " ";
 }

 btnAdjective.onclick = function () {
 	textToSpeak = randomWord(arrayAdjective);
 	speakNow(textToSpeak);
 	full.push(textToSpeak);
 	fullText.innerHTML = textToSpeak + " ";
 }

 btnAnotherNouns.onclick = function () {
 	textToSpeak = randomWord(arrayAnotherNouns);
 	speakNow(textToSpeak);
 	full.push(textToSpeak);
 	fullText.innerHTML = textToSpeak + " ";
 }

 btnPlaces.onclick = function () {
 	textToSpeak = randomWord(arrayPlaces);
	speakNow(textToSpeak);
	full.push(textToSpeak);
	fullText.innerHTML = textToSpeak + " ";
 }

btnSpeaknow.onclick = function () {
 	speakNow(full);
 	fullText.innerHTML = full.join(" ");
 }

 reset.onclick = function () {
 	document.location.reload(true);
 }

