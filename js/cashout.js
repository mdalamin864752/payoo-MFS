document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const getAmountCashOut = document.getElementById('get-amount-cashout').value ;
        const convertedGetAmountCashOut = parseFloat(getAmountCashOut);
        const getPinCashOut = document.getElementById('get-pin-cashout').value ;
        if(getPinCashOut === '1234'){
            const mainBalance = document.getElementById('account-balance').innerText; 
            const convertedMainBalance = parseFloat(mainBalance);
            const newBalance = convertedMainBalance - convertedGetAmountCashOut;
            document.getElementById('account-balance').innerText = newBalance;


        }
        else{
            alert('Input a valid password and try again later')
        }
})