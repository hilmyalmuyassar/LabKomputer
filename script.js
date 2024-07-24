document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'smpitnurulimam' && password === 'bilingual') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
    } else {
        alert('Username atau Password salah!');
    }
});
