const invited = ['hello@hotmail.com', 'hi@hotmail.com', 'Inter@hotmail.com','youtube@hotmail.com', 'google@hotmail.com', 'pavia@hotmail.com', 'hello@gmail.com', 'hi@gmail.com', 'Inter@gmail.com', 'youtube@gmail.com', 'google@gmail.com', 'pavia@gmail.com']; 

document.getElementById('btn-1').addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;
    const outputWelcome = document.querySelector('.outputwelcome');
    const picker = document.querySelector('.emailpicker');

    if (invited.includes(emailInput)) {
        outputWelcome.textContent = 'Welcome! ' + emailInput + ' we were waiting for you!';
        picker.classList.add('d-none');
    } else {
        outputWelcome.textContent = 'Invalid email. You are not invited.';
    }
});

