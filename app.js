const billAmount = document.querySelector("#bill-amount");
const cashGiven =  document.querySelector("#cash-given");
const btnCheck = document.querySelector("#check-button");
const errorMSg = document.querySelector("#error-msg");

btnCheck.addEventListener("click", function validateAmount()
{
    if(billAmount.value > 0)
    {
        if(cashGiven.value >= billAmount.value)
        {
            const amountReturned = cashGiven.value - billAmount.value;
            calculateChange(amountReturned);

        }
        else
        {
            errorMSg.innerText = "Entered Cash Given Amount must be greater or equal than Bill Amount"
        }


    }
    else
    {
      errorMSg.innerText = " Entered Bill Amount must be greater than 0."
    }
})
