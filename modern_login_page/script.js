document.getElementById('showRegisterForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginFormContainer').classList.add('hidden');
    document.getElementById('registerFormContainer').classList.remove('hidden');
});

document.getElementById('showLoginForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerFormContainer').classList.add('hidden');
    document.getElementById('loginFormContainer').classList.remove('hidden');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert("Şifreler eşleşmiyor. Lütfen kontrol edin.");
        return;
    }

    localStorage.setItem('registeredUsername', newUsername);
    localStorage.setItem('registeredPassword', newPassword);
    
    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    
    document.getElementById('registerFormContainer').classList.add('hidden');
    document.getElementById('loginFormContainer').classList.remove('hidden');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const storedUsername = localStorage.getItem('registeredUsername');
    const storedPassword = localStorage.getItem('registeredPassword');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert(`Hoş geldiniz, ${loginUsername}!`);
    } else {
        alert("Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyin.");
    }
});
