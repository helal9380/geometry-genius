document.getElementById('pe-btn').addEventListener('click', () => {
    const width = getElementById('pei-base');
    const height = getElementById('pei-height');
    const area = width * height * 3.14;
    
    setResult('pie-result', area)
    area.toFixed(2)
})

const getElementById = (element) => {
    const pieInputText = document.getElementById(element).value;
    return parseFloat(pieInputText);
}

const setResult = (element, area) => {
    const resultElementText = document.getElementById(element).innerText = area.toFixed(2);
    return resultElementText;
}