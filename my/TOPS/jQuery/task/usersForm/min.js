$(document).ready(function(){
    $('#btnLogin').click(function(){
        $.ajax({
            url: "login.html",
            type: 'GET',
            success: function(data){
                $('#userPages').html(data);
            }
        });
    });
    $('#btnSubmit').click(function(){
        var fName = $('#fName').val();
        var lName = $('#lName').val();
        var sEmail = $('#sEmail').val();
        
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(fName=="" || lName=="" ){
            alert('Please enter input value');
        }
        else if(!regex.test(sEmail)){    
            alert("invalid email id");    
            return regex.test(sEmail);    
        }
        // set the item in localStorage
        else{
            localStorage.setItem('fName', fName);
            localStorage.setItem('lName',lName);
            localStorage.setItem('email', sEmail);
            
        }    
    });
    $("#sPassword").on('keyup', function(){
        $('#password-strength-status').fadeIn().css('display: block')
        var sPassword = $(this).val();
        var number = /([0-9])/;
        var alphabets = /([a-zA-Z])/;
        var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        if ($('#sPassword').val().length < 8) {
            $('#password-strength-status').removeClass();
            $('#password-strength-status').addClass('weak-password');
            $('#password-strength-status').html("Weak (should be atleast 8 characters.)");
        }
        else {
            if ($('#sPassword').val().match(number) && $('#sPassword').val().match(alphabets) && $('#sPassword').val().match(special_characters)) {
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('strong-password');
                $('#password-strength-status').html("Strong");
                localStorage.setItem('password', sPassword);
            } else {
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('medium-password');
                $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters or some combination.)");
                localStorage.setItem('password', sPassword);
            }
        }
      });


    $('#btnEmail').click(function(){
        var email = $('#email').val(); 

        var localStorageEmail= localStorage.getItem('email');

        if(email==""){
            alert('please enter UserId')
        }
        else if(email==localStorageEmail){
            $('#passwordFild').fadeIn().css('display:block');
            $('#btnEmail').fadeOut().css('display: none');
            $('#email').focusin(function(){
                  $('#btnEmail').fadeIn(1200).css('display: block');
            });
            $('#email').focusout(function(){
                  $('#btnEmail').fadeOut().css('display: none');
            });
        }
        else {
            alert('Your userId is not match')
        }
        $('#btnPassword').click(function(){
            var password = $('#password').val();
            var localStoragePassword = localStorage.getItem('password');

            if(password==""){
                alert('please enter Password')
            }
            else if(password==localStoragePassword){
                alert('done');
            }
            else {
                alert('Your Password is not match')
            }
        })
    })

  });






  // $('#email').focusin(function(){
    //   $('#btnEmail').fadeIn(1200).css('display: block');
    // });
    // $('#email').focusout(function(){
    //   $('#btnEmail').fadeOut().css('display: none');
    // });
    // $('#password').focusin(function(){
    //   $('#btnPassword').fadeIn(1200).css('display:block');
    // });
    // $('#password').focusout(function(){
    //   $('#btnPassword').fadeOut().css('display: none');
    // });