//clicked cash out btn and get the cash out option
document.getElementById('show-cash-out-btn')
    .addEventListener('click', function(){
        document.getElementById('cash-out-form').classList.remove('hidden');
        document.getElementById('add-money-form').classList.add('hidden');
});
////clicked add money btn and get the add money  option
document.getElementById('show-add-money-btn')
    .addEventListener('click', function(){
        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('cash-out-form').classList.add('hidden');
})
