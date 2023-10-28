// clear function
function clr()
{
    document.getElementById("result").value="";
}
// back function
function bck()
{
    var back=document.getElementById("result").value;
    var bk=back.slice(0,-1);
    document.getElementById("result").value=bk;
}
// display button values
function display(val)
{
    document.getElementById("result").value+=val;
}
// final result
function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;

}

function sqr()
{
    var x=document.getElementById("result").value;
    var y=Math.sqrt(x);
    document.getElementById("result").value=y;
}
function airth()
{
    var x=document.getElementById("result").value;
    var y=-x;
    document.getElementById("result").value=y;
}