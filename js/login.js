document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value ;
    const pinNumber = document.getElementById('pin-number').value ;
    if(phoneNumber === '01830604806' && pinNumber === '1234' ){
        console.log('welcome to login page');
        window.location.href = '/home.html';
    }
    else{
        alert('Your number or password was wrong')
    }
    
})