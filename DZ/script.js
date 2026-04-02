const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    RUB: 75.0,
    KZT: 450.0,
    GBP: 0.73
};


const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;
    

    if (!amountInput.value || amountInput.value.trim() === '') {
        resultDiv.textContent = 'Ошибка: введите сумму!';
        resultDiv.className = 'result error';
        return;
    }
    
    if (amount < 0) {
        resultDiv.textContent = 'Ошибка: сумма не может быть отрицательной!';
        resultDiv.className = 'result error';
        return;
    }
    
    if (isNaN(amount)) {
        resultDiv.textContent = 'Ошибка: введите корректное число!';
        resultDiv.className = 'result error';
        return;
    }
   
    const amountInUSD = amount / exchangeRates[from];
    const result = amountInUSD * exchangeRates[to];
    
  
    const roundedResult = Math.round(result * 100) / 100;
    
  
    resultDiv.textContent = `${amount} ${from} = ${roundedResult} ${to}`;
    resultDiv.className = 'result';
}


convertBtn.addEventListener('click', convertCurrency);


amountInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertCurrency();
    }
});