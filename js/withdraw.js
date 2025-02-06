// step - 1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please enter a valid number of Amount');
        return;
    }
    // step-3 :
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // step-5 :
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap Ar Bank a Ato Taka Nai, Kom kore Withdraw kor');
        return;
    }
    
    // step-4 :
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-6 :
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})