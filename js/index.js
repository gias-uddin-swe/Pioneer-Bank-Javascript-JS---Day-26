var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// Deposit Amount event handler
    const depositAmount = document.getElementById("depositBtn");
    depositAmount.addEventListener("click", function () {
    const depositNumber = getInputNumber("deposit - input");
    updateSpanText("depositBalance", depositNumber);
    updateSpanText("currentBalance", depositNumber);

  document.getElementById("deposit - input").value = "";
});

// Withdraw button event handler

    const withdrawAmount = document.getElementById("addWithdraw");
    withdrawAmount.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
  const withdrawInput = document.getElementById(id).value;
  const withdrawNumber = parseFloat(withdrawInput);
  return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNUmber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNUmber;
  document.getElementById(id).innerText = totalBalance;
}
