// posibility to navigate with links to Login and Create Account page 
document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

    document.querySelector('#linkCreateAccount').addEventListener('click',e=>{
        // prevent the jumping back to the first page after clicking the link
        e.preventDefault();
        loginForm.classList.add('form--hidden');
        createAccountForm.classList.remove('form--hidden');
    });

    document.querySelector('#linkLogin').addEventListener('click',e=>{
        // prevent the jumping back to the first page after clicking the link
        e.preventDefault();
        loginForm.classList.remove('form--hidden');
        createAccountForm.classList.add('form--hidden');
    });
});