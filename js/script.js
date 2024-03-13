const typingText = document.querySelector('.typing-text p'),
inpField = document.querySelector('.wrapper .input-field input');
timeTag = document.querySelector('.time span b'),
mistakeTag = document.querySelector('.mistake span');

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = 0;



function randomParagraph(){
    // Get the paragraphs
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    // Split the paragraphs into characters
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    // focusing input field on keydown or click event
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping(){
    const characters = typingText.querySelectorAll('span');
    let typedChar = inpField.value.split("")[charIndex];
    timer = setInterval(initTimer, 1000);
    if(typedChar == null){
        charIndex --; // decrement the character index
        if(characters[charIndex].classList.contains("correct")){
            mistakes--;
    }
    else{
        
            if(characters[charIndex].innerHTML === typedChar){
                // if the character is correct show the green color
                // correct class else  add the incorrect class
                characters[charIndex].classList.add("correct");
            }
            else{
                mistake++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++; // increment the character index

    }
    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    mistakeTag.innerHTML = mistakes;
    }
}   

function initTimer(){
    if(timeLeft > 0){
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else{
        clearInterval(timer);
    }
}

randomParagraph();
inpField.addEventListener("input", initTyping);
