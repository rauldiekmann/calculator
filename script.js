
/*
EXTRAS
2.Boton de decimal, que puedan añadir sólo 1
5.Botón de borrar el último número introducido
6.Añadir soporte de teclado */



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



//MAIN OPERATOR FUNCTIONS

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



/*Create the functions that populate the display
 when you click the number buttons. 
 You should be storing the ‘display value’ in a variable 
 somewhere for use in the next step. */


 /*Funcion que añade cada número pulsado a la pantalla consecutivamente,
 así como el punto decimal, luego lo almacena en otra variable
  para los calculos.*/



//1.Función que actualiza el "value" del div "calculator-screen" 
//También almacena dicho valor en la variable usada para las operaciones

let calculatorScreen = document.getElementById("screen");
let screenValue=0;
let number1;
let number2;
let pushedOperator;
let wasOperatorPressed = false;

function cleanBuffer(){
  number1 = undefined;
  number2 = undefined;
  pushedOperator = undefined;
  screenValue= 0;
}

//limpio n2, n1= resultado y operando pulsado = operando

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

let clearButton = document.getElementById("allClear");
clearButton.addEventListener('click' , () =>{ 
  allClear()});


/* tenemos una variable, storedValue
1.Si pushedOperator = undefined, sigue actualizando la pantalla tal cual
2.Si pushedOperator se define, al pulsar yo de nuevo un número,
el valor de la pantalla pasa a ser ese número, y desde ahí se ejecuta normal.
Tengo q cambiar un boolean o algo al pulsar un numero tras definir el operador
 boolean?*/

function updateScreen(number){
  //pantalla = nuevo numero despues de pulsar "="
  if (pushedOperator==undefined && screenValue==0 && calculatorScreen.value!=0){
    calculatorScreen.value= number;
    screenValue=Number(calculatorScreen.value);
  }
  //añadir  numeros
  else if (pushedOperator==undefined){
    calculatorScreen.value= '' + calculatorScreen.value + number;
    screenValue=Number(calculatorScreen.value);
  }
  else if(pushedOperator!=undefined && wasOperatorPressed ==false){
//pantalla = numero pulsado y booelan = true
    calculatorScreen.value= number;
    screenValue=Number(calculatorScreen.value);
    wasOperatorPressed=true;
  }

  else if (pushedOperator!=undefined && wasOperatorPressed ==true){
    calculatorScreen.value= '' + calculatorScreen.value + number;
    screenValue=Number(calculatorScreen.value);
}
}

//HABRÁ QUE RESETAR TB EL BOOLEAN TRAS REALIZAR LAS OPERACIONES!!


//2.Event listener para llamar a funcion al pulsar un numero de la calculadora
  
let numberButton = document.getElementsByClassName("numberButton");


//Para añadir eventListener a la lista de botones, hay que hacer un loop para pillar toda la lista
for (var i = 0 ; i < numberButton.length; i++) {
     let numero = document.getElementsByClassName("numberButton")[i].value; //con esto pillamos el .value de cada uno, creamos dicha variable para cada botón
        numberButton[i].addEventListener('click' , () =>{ 
          updateScreen(numero);          
        })};
    /*Moraleja de la historia: para añadir eventListener
     a varios elementos a la vez, haz un bucle.
     Para elementos únicos, usa getElementById y ya está
     */



//CALCULATIONS FROM INPUTTED NUMBERS

/*1.When user presses operator, store current screen value into another
value, then save the chosen operation to perform, then store the next number,


Then use operate when "=" key is pressed, and display the operation result*/


//Add event listener to store current screen value when pressing operator
    /*1.coge valor/contenido del botón operador, almacena los siguientes valores
      como parámetros de operate():
        -El valor actual de la pantalla como num1
        -El operando pulsado como operator*/

let operatorButton = document.getElementsByClassName("operator");

for (var i = 0 ; i < operatorButton.length; i++) {
   let operatorValue = document.getElementsByClassName("operator")[i].value; //con esto pillamos el .value de cada uno, creamos dicha variable para cada botón
    operatorButton[i].addEventListener('click' , () =>{
      if (number1==undefined && pushedOperator==undefined && number2==undefined){
        pushedOperator = operatorValue;
        number1 = screenValue;
      }

      //else if (number1!=undefined && pushedOperator!=undefined && number2==undefined)

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
        }

      }
    })};

  




//FUNCION LIMPIAR




