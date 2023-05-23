// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function primeFactorDecomposition(n) {
  let factors = "";
  let divisor = 2;

  while (n > 1) {
    let count = 0;
    while (n % divisor === 0) {
      n /= divisor;
      count++;
    }

    if (count > 0) {
      factors += `(${divisor}`;
      if (count > 1) {
        factors += `**${count}`;
      }
      factors += ")";
    }

    divisor++;
  }

  return factors;
}

console.log(primeFactorDecomposition(86240))