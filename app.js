const billAmount = document.querySelector("#bill-amount");
const cashGiven =  document.querySelector("#cash-given");
const btnCheck = document.querySelector("#check-button");
const errorMSg = document.querySelector("#error-msg");
const returnNotes = document.querySelectorAll(".return-notes");
const numberOfNotes = [2000,500,200,100,20,10,1];

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
            showMessage("Entered Cash Given Amount must be greater or equal than Bill Amount");
        }


    }
    else
    {
      showMessage(" Entered Bill Amount must be greater than 0.");
    }
})

function showMessage(message)
{
    errorMSg.innerText = message;
}

function calculateChange(amountReturned)
{
    for(i=0;i<numberOfNotes.length;i++)
    {
        const noOfNotes = Math.trunc(amountReturned/numberOfNotes[i]);
        amountReturned%=numberOfNotes[i];
        returnNotes[i].innerText = noOfNotes;
    }

}
