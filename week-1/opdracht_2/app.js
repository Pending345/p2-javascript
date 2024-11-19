let shop = [];

function addproduct() {
    const inputValue = document.getElementById('input').value;

    shop.push(inputValue);

    document.getElementById('output').innerText = 'Shop: ' + shop.join(', ');

    document.getElementById('input').value = '';
}