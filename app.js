let totalPerson = document.querySelector(".total-amount");
let tipPerson = document.querySelector(".tip-amount");

function calculateTip(percentage) {
  let billAmount = parseInt(document.getElementById("bill").value);
  let numOfPeople = parseInt(document.getElementById("people").value);

  if (billAmount < 1) {
    alert("Please enter a Valid Amount > $ 1.00");
  }

  if (numOfPeople < 1) {
    alert("Please enter a Valid Amount of Persons");
    return
  }

  let tipTotal = (billAmount * percentage) / numOfPeople;
  let personTotal = tipTotal + billAmount / numOfPeople;

  totalPerson.innerHTML = `$ ${personTotal.toFixed(2)}`;
  tipPerson.innerHTML = `$ ${tipTotal.toFixed(2)}`;
}

function reset() {
  window.location.reload
}