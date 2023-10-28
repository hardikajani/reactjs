function test()
{
    if(document.frm.unm.value=="")
    {
        document.getElementById("demo").innerHTML="Please Enter Your Username";
        document.frm.unm.focus();
        return false;
    }
}