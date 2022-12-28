function calculate(){
    const amount = document.querySelector('#amount').value;
    const rate = document.querySelector('#rate').value;
    const months = document.querySelector('#months').value;
    const interest = (amount *(rate*0.01))/months;
    const total = ((amount/months) + interest)
    
    document.querySelector('#total')
        .innerHTML = 'EMI: ($)' + total;

}