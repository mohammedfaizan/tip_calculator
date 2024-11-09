//const calc = document.getElementById("calc");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const billAmount = parseInt(document.getElementById("bill-amount").value);
  const tipPercentage = parseInt(
    document.getElementById("tip-percentage").value
  );

  let totalBill = billAmount + (tipPercentage * billAmount) / 100;

  let res = document.getElementById("res");

  res.textContent = `Total ${totalBill}`;
});
