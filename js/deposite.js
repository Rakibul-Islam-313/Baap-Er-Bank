// Step-1 : 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2 :
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please enter a valid number of Amount');
        return;
    } 
    else if(newDepositAmount > 10000){
        alert('Baap Ar Bank a Ato Taka Rakha jabe na , Kom kore Deposit kor');
        return;
    }
    // step -3 : 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    if(newDepositAmount > 10000){
        alert('Baap Ar Bank a Ato Taka Rakha jabe na , Kom kore Deposit kor');
        return;
    }
    // step - 4 :
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal

    // step-5 :
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6 :
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // console.log(depositAmount);
    
})