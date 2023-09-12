
/* invited list */
const invited = {
  'franedsandi@gmail.com': true,
  'hello@hotmail.com': true,
  'hi@hotmail.com': true,
  'Inter@hotmail.com': true,
  'youtube@hotmail.com': true,
  'google@hotmail.com': true,
  'pavia@hotmail.com': true,
  'hello@gmail.com': true,
  'hi@gmail.com': true,
  'Inter@gmail.com': true,
  'youtube@gmail.com': true,
  'google@gmail.com': true,
  'pavia@gmail.com': true,
};
/* buttons */
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');

button1.addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;
    const outputWelcome = document.querySelector('.outputwelcome');
    const picker = document.querySelector('.emailpicker');

    if (invited[emailInput]) {
      const userEmail = emailInput;
        outputWelcome.textContent = 'Welcome! ' + userEmail + ' we were waiting for you!';
        picker.classList.add('d-none');
        button2.classList.remove('d-none');
        button2.addEventListener('click', function() {
          const welcomecard = document.getElementById('firstcard');
          welcomecard.classList.add('d-none');
          const gamecard = document.getElementById('game');
          gamecard.classList.remove('d-none');
        })
    } else {
        outputWelcome.textContent = 'Invalid email. You are not invited.';
    }
});
const dadiContainer = document.querySelector('.dadi');
let firstBoxValue;
let secondBoxValue;

for (let i = 0; i <= 1; i++) {
  const boxContainer = document.createElement('div');
  boxContainer.classList.add('box-container');
  dadiContainer.append(boxContainer);

  const box = document.createElement('div');
  box.classList.add('box');
  boxContainer.append(box);

  const min = 1;
  const max = 6;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  box.textContent = randomNumber;

  if (i === 0) {
    firstBoxValue = randomNumber;
    const userText = document.createElement('div');
    userText.textContent = 'you';
    boxContainer.append(userText);
  } else {
    secondBoxValue = randomNumber;
    const pcText = document.createElement('div');
    pcText.textContent = 'casino';
    boxContainer.append(pcText);
  }
}

const winnerMessage = document.querySelector('.winner');
if (firstBoxValue > secondBoxValue) {
  winnerMessage.textContent ='You win!';
} else if (firstBoxValue < secondBoxValue) {
  winnerMessage.textContent = 'The most boring Casino online wins!';
} else {
  winnerMessage.textContent = "It's a tie!";
}
