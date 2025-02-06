// step -1 : 
document.getElementById('btn-submit').addEventListener('click', function(){
    //step -2 :
    const emailField = document.getElementById('user-email')
    const email = emailField.value 
    emailField.value = '';
    console.log(email);
    // step -3 :
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    passwordField.value = '';
    console.log(password);
  
    // Step-4 : 
    if (email === 'rakibul@gmail.com' && password === 'password'){
        // console.log('valid user');
        window.location.href = 'bank.html';
    }
    else{
        // console.log('Invalid user ');
        alert("Wrong Information")
        
    }
})