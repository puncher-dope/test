function checkEmail(){
    let email = document.querySelector('#Field').value;
    if (!email.includes('@')) alert('Нет символа @');
    else if (!email.includes('.')) alert('Нет символа .');
    else alert('Все гуд!');
}

let text = document.getElementById('text');
text.title = 'New txt';
console.log(text.title);


// text.style.backgroundColor = 'white';
// text.style.color = 'red';

// text.innerHTML = 'New<br>string'

