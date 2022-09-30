const billAmount = document.querySelector("#bill-amount");
const cashGiven =  document.querySelector("#cash-given");
const btnCheck = document.querySelector("#check-button");

btnCheck.addEventListener("click", function validateAmount()
{
    console.log(billAmount.value-cashGiven.value);
})
