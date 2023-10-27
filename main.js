const dynamicContent = document.getElementById("dynamic-text");
// console.log(dynamicContent);

const phrases = ["Webmaster...", "IT Support...", "Programmer..."];
let phrasesIndex = 0;
let letterIndex = 0;
const typingSpeed = 100;
const erasingSpeed =  75;

function printLetters(phrases){

    if(letterIndex == phrases.length){
        clearLetters();
    }
    else if(letterIndex < phrases.length){
        dynamicContent.textContent += phrases.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function(){
            printLetters(phrases)
        }, typingSpeed)
    }
}
function clearLetters(){
    if(letterIndex == -1){
        phrasesIndex = (phrasesIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phrasesIndex])
    }
    else if(letterIndex > -1){
        let updatedPhrases = "";
        for(let index = 0 ; index < letterIndex; index++){
            updatedPhrases += phrases[phrasesIndex].charAt(index);
        }

        dynamicContent.textContent = updatedPhrases;
        letterIndex -= 1;
        setTimeout(clearLetters, erasingSpeed);
    }
}


printLetters(phrases[phrasesIndex]);