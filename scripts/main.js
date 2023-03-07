let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/bendroz.svg') {
      myImage.setAttribute('src', 'images/bendroz_black.svg');
    } else {
      myImage.setAttribute('src', 'images/bendroz.svg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Joli site, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Joli site, ' + storedName;
}
if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bonjour, ' + storedName;
  }
myButton.addEventListener('click', function() {
    setUserName();
  });
  