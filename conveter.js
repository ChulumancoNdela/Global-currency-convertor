async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    const fromSymbol = getCurrencySymbol(fromCurrency);
    const toSymbol = getCurrencySymbol(toCurrency);

    document.getElementById('result').innerText = `${fromSymbol} ${amount} = ${toSymbol} ${convertedAmount}`;
}

function getCurrencySymbol(currencyCode) {
    switch (currencyCode) {
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'GBP':
            return '£';
        case 'ZAR':
            return 'R'
        default:
            return currencyCode;
    }
}

function processPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Implement payment processing logic here
    // Example: Validate card details, make API request to payment gateway, etc.
}

function processPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Example: Validate card details (You can use a library like Luhn algorithm for simple validation)
    if (cardNumber.length !== 16 || cvv.length !== 3 || !expiryDate.match(/^\d{2}\/\d{2}$/)) {
        alert('Invalid card details. Please check and try again.');
        return;
    }

    // Example: Make API request to payment gateway (This is just a placeholder)
    // Replace this with actual payment gateway integration code
    alert('Payment processed successfully!');
}