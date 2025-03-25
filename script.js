'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //posto je broj izmedju 0 i 20 random funkcija generise broj od 0 do 1, mnozio sa 20, bice od 0 do 19 i dodajemo jedinicu, trunc sklanja decimale
let score = 20; //prikazuje trenutni score, pocetni je 20
let highscore = 0; //pamtice najveci score, pocinje od 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //iz input polja guess uzimamo broj koji je korisnik uneo, posto se novo unosi svaki put kada korisnik klikne check definise se unutar funkcije za dugme check
  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber; //prikazujemo tajni broj
    document.querySelector('body').style.backgroundColor = '#60b347'; //menjamo boju pozadine
    document.querySelector('.number').style.width = '30rem'; //povecavamo velicinu pogodjenog broja
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore; //ako je novi skor veci od prethodnog prikazuje novi highscore
    }
  } else if (!guess) {
    //ako korisnik ne unese broj
    displayMessage('⛔️ No number!');
  } else if (guess !== secretNumber) {
    //korisnik je uneo pogresan broj
    if (score > 1) {
      //jos uvek igra
      guess > secretNumber //ako je broj veci od tajnog
        ? displayMessage('📈 Too high!') //ako je uslov tacan
        : displayMessage('📉 Too low!'); //ako uslov nije tacan
      score--; //smanjujemo score
      document.querySelector('.score').textContent = score;
    } else {
      //score je 0 izgubio je igru
      document.querySelector('.message').textContent = '💥 You lost the game!';
      score = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  //klikom na again resetujemo sve
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

function displayMessage(message) {
  //posto je ovo deklaracija fukcije, moguce je pozvati i pre deklarisanja
  document.querySelector('.message').textContent = message;
}
