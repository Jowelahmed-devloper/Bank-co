// Log In Button Handler

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transactionArea');
    transactionArea.style.display ='block';
})

// Deposit Button Handler

const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositAmountNumber = parseFloat(depositAmount);

    const depositAmountNumber = getInputNumber('depositAmount');

    updateSpanText('currentDeposit', depositAmountNumber);

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositAmountNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositAmountNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;
    updateSpanText('currentBalance', depositAmountNumber);


    document.getElementById('depositAmount').value = '';

})

// Withdraw Button handler

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    // const withdrawAmount = document.getElementById('withdrawAmount').value;
    // const withdrawAmountNumber = parseFloat(withdrawAmount);

    const withdrawAmountNumber = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawAmountNumber);
    updateSpanText('currentBalance', -1* withdrawAmountNumber);
    
    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = currentWithdrawNumber + withdrawAmountNumber;
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;

    document.getElementById('withdrawAmount').value = '';

})

// Function for Deposit button and Current Balance
function updateSpanText(id, depositAmountNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositAmountNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}