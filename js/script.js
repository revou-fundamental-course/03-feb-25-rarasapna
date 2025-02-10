function ctf() {
    const celsius = parseFloat(document.getElementById('main-input').value);
    if (isNaN(celsius)) {
        alert('Masukkan suhu yang valid!');
        return;
    }
    // konversi C to F
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('main-result').value = fahrenheit.toFixed(2);
    
    // rumuss
    document.getElementById('how-result').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function reset() {
    document.getElementById('main-input').value = '';
    document.getElementById('main-result').value = '';
    document.getElementById('how-result').value = '';
}