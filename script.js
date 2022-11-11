
//MAIN OPERATOR FUNCTIONS

function add(num1,num2) {
	let add = num1+num2;
  return add;
};

function subtract(num1,num2) {
	let subtract = num1-num2;
  return subtract;
};

function multiply(num1,num2) {
	let multiply = num1*num2;
  return multiply;
}

function divide(num1,num2) {
	let divide = num1/num2;
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
        divide(num1,num2);
    }
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

function updateScreen(number){
    calculatorScreen.value= '' + calculatorScreen.value + number;
    screenValue=Number(calculatorScreen.value);
}


//2.Event listener para llamar a funcion al pulsar un numero de la calculadora
  
let numberButton = document.getElementsByClassName("numberButton");


//Para añadir eventListener a la lista de botones, hay que hacer un loop para pillar toda la lista
for (var i = 0 ; i < numberButton.length; i++) {
     let numero = document.getElementsByClassName("numberButton")[i].value; //con esto pillamos el .value de cada uno, creamos dicha variable para cada botón
        numberButton[i].addEventListener('click' , () =>{
        //coge valor del botón, llama a la funcion updateScreen con dicho valor
        updateScreen(numero);})};

    /*Moraleja de la historia: para añadir eventListener
     a varios elementos a la vez, haz un bucle.
     Para elementos únicos, usa getElementById y ya está
     */



//CALCULATIONS FROM INPUTTED NUMBERS

/*1.When user presses operator, store current screen value into another
value, then save the chosen operation to perform, then store the next number,


Then use operate when "=" key is pressed, and display the operation result*/


//Add event listener to store current screen value when pressing operator

let operatorButton = document.getElementsByClassName("operator");

for (var i = 0 ; i < operatorButton.length; i++) {
     operatorButton[i].addEventListener('click' , () =>{
      /*1.coge valor/contenido del botón operador, almacena los siguientes valores
      como parámetros de operate():
        -El valor actual de la pantalla como num1
        -El operando pulsado como operator
        
        2.Una vez se ha hecho esto, hay que conseguir 
        que al volver a pulsar un botón numérico, el valor de la pantalla
        se convierta en ese mismo número y desde ahí se sigan podiendo
        añadir números.
      
        3.Una vez se pulse "=", el valor actual de la pantalla se
        convierte en el parámetro num2 de operate(), y justo después
        se ejecuta operate().

        4.Finalmente el resultado de operate se muestra en pantalla

*/
     updateScreen(numero);})};