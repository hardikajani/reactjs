function address()
{
    var address = "Astha Avenue, 150ft Ring Road, Ayodhiya Chock, Rajkot"
    document.write(address);
}

function simpleIntresr(preAmount,intrestRate )
{
    var intrestAmount=preAmount*intrestRate/100;
    document.write('Principal Amount - '+preAmount + '<br>');
    document.write('Intrest Rate - '+intrestRate + '<br>');
    document.write('Intrest Amount - '+intrestAmount);
}

function compoundInterest(principal, rate, time)
{
    var amount = Math.round(principal * (Math.pow((1 + rate / 100), time)));
    var compoundInterestAmount = amount - principal;

    document.write('Amount - ' + principal + '<br>');
    document.write('Rate - ' + rate + '<br>');
    document.write('Time - ' + time + '<br>');
    document.write('CompoundInterestAmount - ' + compoundInterestAmount);
}

function averageMarks(){
    var math=99, chemistry=33, computer=85, JS=76, CSS=52, HTML=54

    var totalMark = math + chemistry + computer + JS + CSS + HTML;
    var average = totalMark / 6;

    document.write('Math - ' + math + '<br>');
    document.write('Chemistry - ' + chemistry + '<br>');
    document.write('Computer - ' + computer + '<br>');
    document.write('JS - ' + JS + '<br>');
    document.write('CSS - ' + CSS + '<br>');
    document.write('HTML - ' + HTML + '<br>');
    document.write('TotalMark - ' + totalMark + '<hr><br>');
    document.write('Average Mark - ' + average);
}

function areaCircle(){
    var radius=4;
    // pi aprox value is 3.14;
    var pi=3.14;

    var area = pi * (Math.pow(radius,2));

    document.write('Radius value is - ' + radius + '<br>');
    document.write('pi value is - ' + pi + '<br>');
    document.write('Area of circle is - ' + area);  


}

function areaTriangle()
{
    var base=10, height=5;
    var area = base * (Math.pow(height,1)/2);
    document.write('base - ' + base + '<br>');
    document.write('height - ' + height + '<br>');
    document.write('Area of Triangle is - ' + area);
}

function areaSquare(){
    var width=18, height=18;

    var area = width*height;

    document.write(area+' -foot');
}

function powNumber(){
    var number=2;

    var square = (Math.pow(number,2));
    var cube = (Math.pow(number,3));

    document.write('Value of number - '+ number + '<br>');

    document.write('Square - '+ square + '<br>');

    document.write('Cube - '+ cube);
}
function sqrtNumber(){
    var number=245.78;

    var squareRoot = Math.sqrt(number);

    document.write('Value of number - '+ number + '<br>');
    document.write('Square Root - '+ squareRoot + '<br>');
}

function cbrtNumber(){
    var number=64;

    var cubRoot = Math.cbrt(number);

    document.write('Value of number - '+ number + '<br>');
    document.write('Cub Root - '+ cubRoot + '<br>');
}
