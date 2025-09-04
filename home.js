document.getElementById('btn-add')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const bank = document.getElementById('bank').value;
        const accountNumber = document.getElementById('bank-account-number').value;
        const amountNumber = parseInt(document.getElementById('add-amount').value);
        const pinNumber = document.getElementById('pin-number').value;

        // accessioning the available balance 
        const availableBalance= parseInt(document.getElementById('avail-balance').innerText);

        const totalBalance=amountNumber+availableBalance;

        document.getElementById('avail-balance').innerText=totalBalance;
     
    })