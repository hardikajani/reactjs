var result=document.getElementById('result');

function clr(){
    result.value="";
    result.focus(); 
}

function backspase(){
    var back=result.value;
    var bk=back.slice(0,-1);
    result.value=bk;
    result.focus();

}

function display(val)
{
    if(val=="%"){
        var output=val.replace("%", "/100");
        result.value+=output;
    }
    else{
        result.value+=val;  
    }
}
function sqr()
{
    var x=result.value;
    var y=Math.sqrt(x);
    result.value=y;
}
function pow()
{
    var x=result.value;
    var y=Math.pow(x,2);
    result.value=y;
}

function finalresult()
{
    var x=result.value;
    if(!x==0){
        var finalresult=eval(x);
        result.value=finalresult;
    }
    else{
        alert('enter value');
    }
    

}