async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from_currency').value;
    const toCurrency = document.getElementById('to_currency').value;

    const response = await fetch(`https://v6.exchangerate-api.com/v6/1ba1a79e3b53e0c720c36240/latest/${fromCurrency}`);
    const data = await response.json();
    
    const rate = data.conversion_rates[toCurrency];
    const result = amount * rate;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} is ${result.toFixed(2)} ${toCurrency}`;
}
