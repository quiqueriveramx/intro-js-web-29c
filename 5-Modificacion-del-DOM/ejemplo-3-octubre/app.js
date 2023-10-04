const loginContainer = document.querySelector('#login');
const cuentaContainer = document.querySelector('#cuenta');

cuentaContainer.style.display = 'none';

const isPasswordCorrect = false;

if(isPasswordCorrect) {
    loginContainer.style.display = 'none';
    cuentaContainer.style.display = 'block';
}
