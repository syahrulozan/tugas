const form = document.getElementById('form-group');
const firstname = document.getElementById('firstname');
const Lastname = document.getElementById('Lastname');
const worktype = document.getElementById('worktype');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.innerText = message;
}

function hideError(inputId) {
    const errorElement = document.getElementById(`${inputId}`);
    errorElement.innerText = '';
}

form.addEventListener('submit', function(obj){
    obj.preventDefault();

    if(firstname.value =='') {
        showError('firstname', 'nama awal harus diisi')
    } else{
        hideError('fristname');
    }

    if(Lastname.value =='') {
        showError('Lastname', 'nama akhir harus diisi')
    } else{
        hideError('Lastname');
    }

    if(worktype.value ==''){
        showError('worktype', 'worktype diisi bro')
    } else{
        hideError('worktype');
    }

    if(phoneNumber.value ==''){
        showError('phoneNumber', 'diisi bro')
    } else{
        hideError('phoneNumber');
}

    if(email.value ==''){
        showError('email', 'emailnya')
    } else{
        hideError('email');
    }

    if(password.value ==''){
        showError('password', 'passwordnya')
    } else{
        hideError('password');
    }
})

