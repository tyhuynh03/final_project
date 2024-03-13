const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

// Hiển thị form đăng nhập và ẩn form đăng ký
loginLink.addEventListener('click', function() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

// Hiển thị form đăng ký và ẩn form đăng nhập
signupLink.addEventListener('click', function() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});
