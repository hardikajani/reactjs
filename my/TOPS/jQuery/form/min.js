$(document).ready(function () {

    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';


let captcha_code = document.getElementById('captcha_code');
let code_value = document.getElementById('code_value');


function generate(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

captcha_code.innerText=generate(5);
console.log(captcha_code.innerText);
console.log(code_value.value)

    $("#myfo").validate({

        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                number: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 10
            },
            con_Password: {
                required: true,
                equalTo: "#password",
                // minlength: 6,
                // maxlength: 10
            },
            captcha_code:{
                required: true
            },
            code_value: {
                required: true,
                // equalTo: "#captcha_code"
            },

        },
        messages: {
            name: {
                required: 'First enter your name',
                minlength: 'Your name must consist of at least 2 characters'

            },
            email: {
                required: 'Please enter your email address',
                email: 'Enter your mail into the mail formate'
            },
            phone: {
                required: 'Please enter your phone number',
                number: 'Only digits are allowed',
                minlength: 'Your phone number must be 10 digits'
            },
            password: {
                required: 'Please enter your password 6 to 10 text',
                minlength: 'Your password must be 6 latter',
                maxlength: 'Ypur password maxlength 10 latter'
            },
            con_Password: {
                required: 'Please enter Conform password 6 to 10 text',
                equalTo: 'Please conform password is not equal to password',
                // minlength: 'Your Conform password must be 6 latter',
                // maxlength: 'Your Conform password maxlength 10 latter'

            },
            captcha_code:{
                required: 'code is not generated Please wait....',
            },
            code_value: {
                required: 'Please enter below text',
                // equalTo: 'text is not equal to below text'
            },
        },
        submitHandler: function (form) {
            form.submit(function(){
                $.ajax({
                    url: "test.html",
                    type: 'GET',
                    success: function(data){
                        console.log(data);
                        // $('body').html(data);
                    }
                });
            });
                    
        }
    });
});
