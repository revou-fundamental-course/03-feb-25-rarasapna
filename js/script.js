function autoConvert() {
    const input = document.getElementById('main-input').value;
    const resultBox = document.getElementById('main-result');
    const explanationBtn = document.getElementById('explanation-btn');
    const explanationText = document.getElementById('explanation-text');
    
    if (input === '') {
        resultBox.textContent = '';
        explanationBtn.style.display = 'none';
        return;
    }

    let result, explanation;
    if (document.getElementById('title-label').textContent.includes("Celcius")) {
        result = (parseFloat(input) * 9/5) + 32;
        explanation = `${input}°C × (9/5) + 32 = ${result}°F`;
    } else {
        result = (parseFloat(input) - 32) * 5/9;
        explanation = `(${input}°F - 32) × (5/9) = ${result}°C`;
    }
    
    resultBox.textContent = result + (document.getElementById('title-label').textContent.includes("Celcius") ? "°F" : "°C");
    explanationText.textContent = explanation;
    explanationBtn.style.display = 'block';
}

function showExplanation() {
    document.querySelector('.explanation-box').style.display = 'block';
}

function reset() {
    document.getElementById('main-input').value = '';
    document.getElementById('main-result').textContent = '';
    document.getElementById('explanation-text').textContent = '';
    document.getElementById('explanation-btn').style.display = 'none';
    document.querySelector('.explanation-box').style.display = 'none';
}

function reverseConversion() {
    const titleLabel = document.getElementById('title-label');
    const inputLabel = document.getElementById('input-label');
    const mainInput = document.getElementById('main-input');
    const mainResult = document.getElementById('main-result');
    const explanationBtn = document.getElementById('explanation-btn');
    const explanationText = document.getElementById('explanation-text');

    let inputValue = mainInput.value;

    if (titleLabel.textContent.includes("Celcius")) {
        titleLabel.textContent = "Konversi Suhu (Fahrenheit)";
        inputLabel.innerHTML = "Masukkan Suhu (&deg;F)";
        if (inputValue !== "") {
            let convertedValue = ((parseFloat(inputValue) * 9/5) + 32);
            mainInput.value = convertedValue;
            mainResult.textContent = `${convertedValue}°F`;
            explanationText.textContent = `${inputValue}°C × (9/5) + 32 = ${convertedValue}°F`;
            explanationBtn.style.display = 'block';
        }
    } else {
        titleLabel.textContent = "Konversi Suhu (Celcius)";
        inputLabel.innerHTML = "Masukkan Suhu (&deg;C)";
        if (inputValue !== "") {
            let convertedValue = ((parseFloat(inputValue) - 32) * 5/9);
            mainInput.value = convertedValue;
            mainResult.textContent = `${convertedValue}°C`;
            explanationText.textContent = `(${inputValue}°F - 32) × (5/9) = ${convertedValue}°C`;
            explanationBtn.style.display = 'block';
        }
    }
}