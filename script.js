const spnText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
// const txt = ['tekst1', 'tekst2', 'tekst3']
const tekst = ['Pierwszy tekst', 'Drugi tekst... :)', 'oraz trzeci tekst', 'i kolejny czwartyyyy'];

let indexText = 0;
let next = 0;

const addLetter = () => {
    spnText.textContent += tekst[next][indexText];
    indexText++;
    if (indexText === tekst[next].length + 1) {
        // clearInterval(indexTyping); // do zatrzymania interwału
        spnText.textContent = "";
        indexText = 0;
        next++;
        if (next === tekst.length) {
            next = 0;
        }
    }


}


const cursorAnimation = () => {
    cursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, 130);
setInterval(cursorAnimation, 800);
// setTimeout(addLetter, 1000)