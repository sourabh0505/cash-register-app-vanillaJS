const BillAmount = document.querySelector("#bill-amount");
const CashGiven = document.querySelector("#cash-given");
const evaluate = document.querySelector("#evaluate-btn");
const message = document.querySelector("#error-message");
const noOfnotes = document.querySelectorAll("#no-of-notes");

const notearray = [2000,500,100,50,20,10,5,1];

evaluate.addEventListener("click", function returnamount() {
    message.style.display = "none";
    if (BillAmount.value > 0) {
        if (CashGiven.value >= BillAmount.value) {
            var AmountToBeReturned = CashGiven.value - BillAmount.value;
            totalamounttobepaid(AmountToBeReturned);
        } else {
            messagehandler();
        }
    } else {
        messagehandler();
    }
})

function totalamounttobepaid(AmountToBeReturned){
    for(i = 0;i < notearray.length;i++){
        const numberofnotes = Math.trunc(AmountToBeReturned / notearray[i]);
        AmountToBeReturned %= notearray[i];
        noOfnotes[i].innerText = numberofnotes;
    }
}

function messagehandler(){
    message.style.display = "block";
    message.innerText = "the amount is invalid";
}