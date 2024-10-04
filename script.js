
let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let inputField = document.querySelector('.input-field');
let title = document.querySelector('h1.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('p span');
let confirmBox = document.querySelector('.confirm-box');
let confirmMessage = document.querySelector('#confirm-message');
let confirmBtn = document.querySelector('#confirm-btn');

signInBtn.addEventListener('click', () => {
    inputField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    inputField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});

signUpBtn.addEventListener('click', () => {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (name !== '' && email !== '' && password !== '') {
        confirmBox.style.display = 'block';
        confirmMessage.innerHTML = 'You have successfully signed up!';
        confirmBtn.addEventListener('click', () => {
            confirmBox.style.display = 'none';
        });
    } else {
        confirmBox.style.display = 'block';
        confirmMessage.innerHTML = 'Please fill in all fields!';
        confirmBtn.addEventListener('click', () => {
            confirmBox.style.display = 'none';
        });
    }
});

signInBtn.addEventListener('click', () => {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (email !== '' && password !== '') {
        confirmBox.style.display = 'block';
        confirmMessage.innerHTML = 'You have successfully signed in!';
        confirmBtn.addEventListener('click', () => {
            confirmBox.style.display = 'none';
        });
    } else {
        confirmBox.style.display = 'block';
        confirmMessage.innerHTML = 'Please fill in all fields!';
        confirmBtn.addEventListener('click', () => {
            confirmBox.style.display = 'none';
        });
    }
});