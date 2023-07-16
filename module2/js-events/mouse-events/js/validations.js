function valid()
{
    if(document.frm.fname.value=="")
    {
        alert('Please enter your firstName here')
        document.frm.fname.focus();
        return false;
    }
    var fnm=/^[A-Za-z]+$/;
    if(!fnm.test(document.frm.fname.value))
    {
        alert('Please enter your firstName alphabetic character only')
        document.frm.fname.focus();
        return false;
    }
    
    if(document.frm.lname.value=="")
    {
        alert('Please enter your lastName here')
        document.frm.lname.focus();
        return false;
    }
    var lnm=/^[A-Za-z]+$/;
    if(!lnm.test(document.frm.lname.value))
    {
        alert('Please enter your lastName alphabetic character only')
        document.frm.lname.focus();
        return false;
    }
    
    if(document.frm.email.value=="")
    {
        alert('Please enter your Email here')
        document.frm.email.focus();
        return false;
    }

    var em= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!em.test(document.frm.email.value))
    {
        alert('Please your valid email address')
        document.frm.email.focus();
        return false;
    }
}