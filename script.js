const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.getElementById('time-left');
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
let correctWord;
let maxTime = 30;
let timer;
const initTimer = () => {
    clearInterval(timer);
    maxTime = 30; 
    timeText.innerText = maxTime; 
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime; 
        } else {
            clearInterval(timer);
            alert(`Time's up! The correct word was: ${correctWord.toUpperCase()}`);
            initGame(); 
        }
    }, 1000);
}
const initGame = () => {
    maxTime = 30;
    initTimer();
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
const checkWord = () => {
    let userWord = inputField.value.trim().toLowerCase();
    if (!userWord) {
        alert("Please enter a word to check.");
        return;
    }
    if (userWord !== correctWord) {
        alert(`Oops! "${userWord}" is not the correct word.`);
    } else {
        alert(`Congratulations! "${userWord.toUpperCase()}" is correct!`);
    }
    initGame();
}
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
const words = [
    { word: "addition", hint: "the process of adding numbers" },
    { word: "meeting", hint: "an event where people come together" },
    { word: "computer", hint: "an electronic device for processing data" },
    { word: "sunshine", hint: "light and warmth from the sky during the day" },
    { word: "holiday", hint: "a day of celebration or relaxation" },
    { word: "jungle", hint: "dense forest typically found in tropical regions" },
    { word: "puzzle", hint: "a game or problem designed to test ingenuity or knowledge" },
    { word: "champion", hint: "a winner of a competition or contest" },
    { word: "mystery", hint: "something that is difficult or impossible to understand or explain" },
    { word: "courage", hint: "the ability to do something that frightens one" },
    { word: "wisdom", hint: "the quality of having experience, knowledge, and good judgment" },
    { word: "adventure", hint: "an unusual and exciting experience or activity" },
    { word: "rainbow", hint: "a colorful arc of light in the sky caused by sunlight shining through water droplets" },
    { word: "music", hint: "a combination of sounds that is pleasing to the ear" },
    { word: "ocean", hint: "a large body of saltwater that covers most of the Earth's surface" },
    { word: "planet", hint: "a large celestial body that revolves around a star" },
    { word: "friend", hint: "a person who you like and trust" },
    { word: "peace", hint: "freedom from war or violence" },
    { word: "love", hint: "a deep feeling of affection and care for another person" },
    { word: "knowledge", hint: "information, understanding, and awareness" },
    { word: "creativity", hint: "the use of imagination or original ideas to create something new" },
    { word: "celebrate", hint: "to show happiness or joy in a special way" },
    { word: "explore", hint: "to travel to new places and learn new things" },
    { word: "dream", hint: "a series of thoughts, images, or feelings occurring in your mind during sleep" },
    { word: "learn", hint: "to gain knowledge or skill by studying, practicing, or being taught" },
    { word: "help", hint: "to give assistance to someone" },
    { word: "kindness", hint: "the quality of being friendly, generous, and considerate" },
  ];
  