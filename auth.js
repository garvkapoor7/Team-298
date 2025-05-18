// Shared authentication functions
const backendUrl = 'http://127.0.0.1:8000';

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
}

// Function to update navbar based on auth state
function updateNavbarAuthState() {
    const token = localStorage.getItem('access_token');
    const loginLinks = document.querySelectorAll('.login-link');
    const signupLinks = document.querySelectorAll('.signup-link');
    const profileLinks = document.querySelectorAll('.profile-link');
    const cartButtons = document.querySelectorAll('.cart-btn');
    const logoutLinks = document.querySelectorAll('.logout-link');

    if (token) {
        // User is logged in
        loginLinks.forEach(link => link.style.display = 'none');
        signupLinks.forEach(link => link.style.display = 'none');
        profileLinks.forEach(link => link.style.display = '');
        cartButtons.forEach(btn => btn.style.display = '');
        logoutLinks.forEach(link => link.style.display = '');
    } else {
        // User is logged out
        loginLinks.forEach(link => link.style.display = '');
        signupLinks.forEach(link => link.style.display = '');
        profileLinks.forEach(link => link.style.display = 'none');
        cartButtons.forEach(btn => btn.style.display = 'none');
        logoutLinks.forEach(link => link.style.display = 'none');
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('access_token');
    updateNavbarAuthState();
    // Redirect to landing page
    window.location.href = 'landingpage.html';
}

// Add event listeners to logout links
document.addEventListener('DOMContentLoaded', function() {
    const logoutLinks = document.querySelectorAll('.logout-link');
    logoutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    });
    
    // Initial navbar state update
    updateNavbarAuthState();
}); 