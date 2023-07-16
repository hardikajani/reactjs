function validForm()
{
    var fname=document.signupForm.fname;
    var lname=document.signupForm.lname;
    var validName=/^[A-Za-z]+$/;
    var nameError=document.getElementById('nameError');

    var email=document.signupForm.email;
    var validEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailError=document.getElementById('emailError');

    var mobileNumber=document.signupForm.mobilenumber;
    var validNumber=/^\d{10}$/;
    var phoneError=document.getElementById('phoneError');
    

    var password=document.signupForm.password;
    var passwordError=document.getElementById('passwordError');


    if(fname.value=="")
    {
        nameError.style='display: block';
        nameError.innerHTML='Please enter firstName here';
        fname.focus();
        return false;
    }    
    
    if(!validName.test(fname.value))
    {
        nameError.style='display: block';
        nameError.innerHTML='Please enter alphabetic character only here';
        fname.focus();
        return false;
    }
    else{
        nameError.style='display: none';
    }

    if(lname.value=="")
    {
        nameError.style='display: block';
        nameError.innerHTML='Please enter lastName here';
        lname.focus();
        return false;
    }    
    
    if(!validName.test(lname.value))
    {
        nameError.style='display: block';
        nameError.innerHTML='Please enter alphabetic character only here';
        lname.focus();
        return false;
    }
    else{
        nameError.style='display: none';
    }

    if(email.value=="")
    {
        emailError.style='display: block';
        emailError.innerHTML='Please enter email here';
        email.focus();
        return false;
    }
    if(!validEmail.test(email.value))
    {
        emailError.style='display: block';
        emailError.innerHTML='Please enter valid email formet only';
        email.focus();
        return false;
    }
    else{
        emailError.style='display: none';
        localStorage.setItem('email', email.value);
        document.cookie = fname.value + ' '+ lname.value + '=' + email.value;
    }
    if(mobileNumber.value=="")
    {
        phoneError.style='display: block';
        phoneError.innerHTML='Please enter mobile number here';
        mobileNumber.focus();
        return false;        
    }
    if(!validNumber.test(mobileNumber.value))
    {
        phoneError.style='display: block';
        phoneError.innerHTML='Invalid number; must be ten digits';
        mobileNumber.focus()
        return false;
    }
    else{
        phoneError.style='display: none';
    }

    if(password.value=="")
    {
        passwordError.style='display: block';
        passwordError.innerHTML='Please enter password here';
        password.focus();
        return false;
    }
    if(password.value.length<8)
    {
        passwordError.style='display: block';
        passwordError.innerHTML='password langth must be eight or more character';
        password.focus();
        return false;
    }
    else{
        passwordError.style='display: none';
        // localStorage.setItem('password', password.value);
        // document.cookie = 'password' + '=' + password.value;


    }

}
    // var userEmail=document.loginForm.userEmail;
    // var userPassword=document.loginForm.userPassword;

    // var emailValue=document.cookie.get('HARDIK AJANI');
    // // var passwordValue=localStorage.getItem('password');

    // userEmail.setAttribute("value", emailValue);
    // // userPassword.setAttribute("value", passwordValue);

function validUser(){
    

}