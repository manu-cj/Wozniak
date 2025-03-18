const firstName = document.querySelector('#firstname');
const displayFirstname = document.querySelector('#display-firstname');

firstName.addEventListener('keyup', () => {
    displayFirstname.textContent = firstName.value;
})

const age = document.querySelector('#age');
const aHardTruth = document.querySelector('#a-hard-truth');

age.addEventListener('keyup', () => {
    if (age.value < 18) {
        aHardTruth.style.visibility = 'hidden'
    } else {
        aHardTruth.style.visibility = 'visible';
    }
});

const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');

pwd.addEventListener('keyup', () => {
    pwd.style.outline = 'none';
    if (pwd.value.length < 6) {
        pwd.style.border = '2px solid red';
        pwd.setCustomValidity('Password must be at least 6 characters long');
    } else {
        pwd.style.border = '2px solid green'
        pwd.setCustomValidity('');
    }
    pwd.reportValidity();
});

pwdConfirm.addEventListener('keyup', () => {
    pwdConfirm.style.outline = 'none';
    if (pwdConfirm.value !== pwd.value) {
        pwdConfirm.style.border = '2px solid red';
        pwdConfirm.setCustomValidity('Passwords do not match');
    } else {
        pwdConfirm.style.border = '2px solid green';
        pwdConfirm.setCustomValidity('');
    }
    pwdConfirm.reportValidity();
});

const toggleDarkmode = document.querySelector('#toggle-darkmode');

toggleDarkmode.addEventListener('change', () => {
    if (toggleDarkmode.value === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    else if(toggleDarkmode.value === 'light') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});