let calculatorScreen = document.getElementById("screen");
let screenValue=0;
let number1;
let number2;
let pushedOperator;
let wasOperatorPressed = false;
let numberButton = document.getElementsByClassName("numberButton");
let operatorButton = document.getElementsByClassName("operator");
let clearButton = document.getElementById("allClear");

function getDecimalPart(num) {
  if (Number.isInteger(num)) {
    return 0;
  }
  const decimalStr = num.toString().split('.')[1];
  return Number(decimalStr);
}

function roundTo3(numero){
  if (getDecimalPart(numero)>3) {
      let numeroFinal = (numero.toFixed(3));
      return numeroFinal;
  }
  else{
    let numeroFinal = numero;
    return numeroFinal;
  }
}

function add(num1,num2) {
	let add = num1+num2;
  let finalNumber= roundTo3(add);
  calculatorScreen.value = finalNumber;
  screenValue=Number(calculatorScreen.value);
  return add;
};

function subtract(num1,num2) {
	let subtract = num1-num2;
  let finalNumber= roundTo3(subtract);
  calculatorScreen.value = finalNumber;
  screenValue=Number(calculatorScreen.value);
  return subtract;
};

function multiply(num1,num2) {
	let multiply = num1*num2;
  let finalNumber= roundTo3(multiply);
  calculatorScreen.value = finalNumber;
  screenValue=Number(calculatorScreen.value);
  return multiply;
}

function divide(num1,num2) {
	let divide = num1/num2;
  let finalNumber= roundTo3(divide);
  calculatorScreen.value = finalNumber;
  screenValue=Number(calculatorScreen.value);
  return divide;
}

function operate (operator,num1,num2){
    if (operator == "+") {
        add(num1,num2);
    }
    else if (operator == "-"){
        subtract(num1,num2);
    } 
    else if (operator == "*") {
        multiply(num1,num2);
    }
    else if (operator == "/"){
      if (num2!=0){
        divide(num1,num2);}
      else{
        alert("You can't divide by 0!!!")
        allClear();
      } 
    }
    wasOperatorPressed = false;
}

function cleanBuffer(){
  number1 = undefined;
  number2 = undefined;
  pushedOperator = undefined;
  screenValue= 0;
}

function chainBuffer(){
  number1 = screenValue;
  number2 = undefined;
}

function allClear(){
  number1 = undefined;
  number2 = undefined;
  pushedOperator = undefined;
  screenValue= 0;
  calculatorScreen.value=0;
}

function updateScreen(number){
  if (pushedOperator==undefined && screenValue==0 && calculatorScreen.value!=0){
    calculatorScreen.value= number;
    screenValue=Number(calculatorScreen.value);
  }
  else if (pushedOperator==undefined){
    calculatorScreen.value= '' + calculatorScreen.value + number;
    screenValue=Number(calculatorScreen.value);
  }
  else if(pushedOperator!=undefined && wasOperatorPressed ==false){
    calculatorScreen.value= number;
    screenValue=Number(calculatorScreen.value);
    wasOperatorPressed=true;
  }
  else if (pushedOperator!=undefined && wasOperatorPressed ==true){
    calculatorScreen.value= '' + calculatorScreen.value + number;
    screenValue=Number(calculatorScreen.value);
  }
}

clearButton.addEventListener('click' , () =>{ 
  allClear()});

for (var i = 0 ; i < numberButton.length; i++) {
     let numero = document.getElementsByClassName("numberButton")[i].value; //con esto pillamos el .value de cada uno, creamos dicha variable para cada botón
        numberButton[i].addEventListener('click' , () =>{ 
          updateScreen(numero);          
        })};

for (var i = 0 ; i < operatorButton.length; i++) {
   let operatorValue = document.getElementsByClassName("operator")[i].value; //con esto pillamos el .value de cada uno, creamos dicha variable para cada botón
    operatorButton[i].addEventListener('click' , () =>{
      if (number1==undefined && pushedOperator==undefined && number2==undefined){
        pushedOperator = operatorValue;
        number1 = screenValue;
      }
      else{
        if (operatorValue=="="){
          number2 = screenValue;
          operate (pushedOperator,number1,number2);
          cleanBuffer();
        }
        else{
          number2 = screenValue;
          operate (pushedOperator,number1,number2);
          chainBuffer();
          pushedOperator = operatorValue
        }}})};