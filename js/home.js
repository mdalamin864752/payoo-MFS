document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const getAmount = document.getElementById('get-amount').value;
    const getPin = document.getElementById('get-pin').value;
    // console.log(getPin, getAmount)
    if(getPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        
        const convertedGetAmount = parseFloat(getAmount);
        const convertedGetBalance = parseFloat(balance);
        const newBalance = convertedGetAmount + convertedGetBalance;
        console.log(newBalance,convertedGetAmount)
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Input your correct value! try again Later')
    }
    }
)