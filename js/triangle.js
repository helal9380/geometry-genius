document.getElementById('triangle-btn').addEventListener('click', function() {
    const baseInputElement = document.getElementById('triangle-base');
    const baseInputText = baseInputElement.value;
    const base = parseFloat(baseInputText);
    baseInputElement.value = '';
    

    const heightInputElement = document.getElementById('triangle-heigth');
    const heightInputText = heightInputElement.value;
    const heigth = parseFloat(heightInputText)
    heightInputElement.value = '';

    const area = 0.5 * base * heigth;
    
    const setResult = document.getElementById('area');
    setResult.innerText = area;
})