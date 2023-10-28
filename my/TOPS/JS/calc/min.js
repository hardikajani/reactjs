let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";
for (i of buttons) {
    screen.value=0;
    i.addEventListener('click', (e) => {

        buttonText = e.target.innerText;
    
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value += screenValue;
        }
        
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '<--'){
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
};