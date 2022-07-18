// select buttons and display area
var buttons= document.getElementsByClassName('button');
var display= document.getElementById('display');
var operand1= null;
var operand2= null;
var operator= null;
// add event listeners to buttons
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', calculate);
}
function calculate(){
    var value = this.getAttribute('data-value');
    var text = display.innerHTML.trim();
    //   if buttons are operators
    if(value == '+'|| value == '-'|| value == '*'|| value == '/' ){
        operand1= parseFloat(text);
        // display.innerHTML= " ";
        operator= value;
        display.innerHTML = '';
         
    }
    //   if buttons are allclear
    else if(value == 'ac'){
        display.innerHTML=" ";
    }
    //   if buttons is -ve sign
    else if(value == 'sign'){
        var existingText = text;
        existingText= -1 * existingText;
        display.innerHTM = existingText;
    }
    //   if buttons are percent
    else if(value == '%'){
        var existingText = text;
        existingText= existingText/100;
        display.innerHTML= existingText;

    }
    //   if buttons are decimal
    else if(value =='.'){
        if(!text.includes('.')){
            var existingText = text;
            display.innerHTML= existingText + '.'; 
        }
    }
    //   if buttons are equals
    else if(value =='='){
        operand2 = parseFloat(text);
        var result = eval(operand1 +' '+ operator +' '+ operand2);
        console.log(result);
        display.innerHTML = result;
        operand1 = result;
        operand2 = null;
        operator = null;
    }
    //   if buttons are numbers
    else{
        display.innerHTML += value;
    }
}
// segrgate buttons in categories and do particular tsks


