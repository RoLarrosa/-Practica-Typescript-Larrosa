//--------------------CALCULADORA---------------------

// Definimos las operaciones disponibles
/*type Operation = 'suma' | 'resta' | 'multiplicacion' | 'division';

// Funciones para realizar las operaciones
function suma(a: number, b: number): number {
    return a + b;
}

function resta(a: number, b: number): number {
    return a - b;
}

function multiplicacion(a: number, b: number): number {
    return a * b;
}

function division(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}

// Función principal que recoge la entrada del usuario y muestra el resultado
function calcular(operacion: Operation, num1: number, num2: number): void {
    let resultado: number;

    switch (operacion) {
        case 'suma':
            resultado = suma(num1, num2);
            break;
        case 'resta':
            resultado = resta(num1, num2);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(num1, num2);
            break;
        case 'division':
            resultado = division(num1, num2);
            break;
        default:
            throw new Error("Operación no válida.");
    }

    alert(`El resultado de ${operacion} entre ${num1} y ${num2} es: ${resultado}`);
}

// Ejemplo de uso
//const num1 = parseFloat(prompt("Ingrese el primer número:"));
//const num2 = parseFloat(prompt("Ingrese el segundo número:"));

const num1Input = prompt("Ingrese el primer número:");
if (num1Input !== null) {
  const num1 = parseFloat(num1Input);

  const num2Input = prompt("Ingrese el segundo número:");
  if (num2Input !== null) {
    const num2 = parseFloat(num2Input);

    // Ahora puedes realizar cálculos con num1 y num2
    const operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):") as Operation;
    calcular(operacion, num1, num2);

  } else {
    console.log("Ingresaste un valor inválido para el segundo número.");
  }
} else {
  console.log("Ingresaste un valor inválido para el primer número.");
}*/

//--------------------CONTADOR DE NUMEROS PARES E INPARES---------

/*function contarParesImpares(min: number, max: number): void {
  let pares = 0;
  let impares = 0;

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  alert(`Cantidad de números pares en el rango: ${pares}`);
  alert(`Cantidad de números impares en el rango: ${impares}`);
}

const rangoMinimoInput = prompt("Ingrese el rango mínimo:");
const rangoMaximoInput = prompt("Ingrese el rango máximo:");

if (rangoMinimoInput !== null && rangoMaximoInput !== null) {
  const rangoMinimo = parseInt(rangoMinimoInput);
  const rangoMaximo = parseInt(rangoMaximoInput);

  if (!isNaN(rangoMinimo) && !isNaN(rangoMaximo)) {
    contarParesImpares(rangoMinimo, rangoMaximo);
  } else {
    alert("Ingresaste valores inválidos.");
  }
} else {
  alert("Cancelaste la entrada de datos.");
} */

//--------------Tabla de Multiplicar-------

/*function mostrarTablaMultiplicar(numero: number, limite: number): void {
  console.log(`Tabla de multiplicar del ${numero} hasta ${limite}:`);
  
  for (let i = 1; i <= limite; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

const numeroInput = prompt("Ingrese un número para la tabla de multiplicar:");
const limiteInput = prompt("Ingrese el límite de la tabla (por ejemplo, 10):");

if (numeroInput !== null && limiteInput !== null) {
  const numero = parseInt(numeroInput);
  const limite = parseInt(limiteInput);

  if (!isNaN(numero) && !isNaN(limite)) {
    mostrarTablaMultiplicar(numero, limite);
  } else {
    console.log("Ingresaste valores inválidos.");
  }
} else {
  console.log("Cancelaste la entrada de datos.");
}*/

//-------------------Fibonacci---------------

/*function generarFibonacci(n: number): number[] {
  const fibonacci: number[] = [];

  if (n >= 1) {
    fibonacci.push(0);
  }
  if (n >= 2) {
    fibonacci.push(1);
  }

  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
}

const nInput = prompt("Ingrese la cantidad de números de la secuencia de Fibonacci que desea generar:");

if (nInput !== null) {
  const n = parseInt(nInput);

  if (!isNaN(n) && n > 0) {
    const fibonacciSequence = generarFibonacci(n);
    console.log(`Los primeros ${n} números de la secuencia de Fibonacci son: ${fibonacciSequence.join(", ")}`);
  } else {
    console.log("Ingrese un valor válido para la cantidad de números.");
  }
} else {
  console.log("Cancelaste la entrada de datos.");
}*/

//-------------Convertidor de Temperatura------

/*function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5/9;
}

const opcionInput = prompt("Seleccione una opción:\n1. Convertir de Celsius a Fahrenheit\n2. Convertir de Fahrenheit a Celsius");

if (opcionInput !== null) {
  const opcion = parseInt(opcionInput);

  if (!isNaN(opcion) && (opcion === 1 || opcion === 2)) {
    const valorInput = prompt("Ingrese el valor a convertir:");

    if (valorInput !== null) {
      const valor = parseFloat(valorInput);

      if (!isNaN(valor)) {
        if (opcion === 1) {
          const fahrenheit = celsiusToFahrenheit(valor);
          alert(`${valor}°C es igual a ${fahrenheit.toFixed(2)}°F`);
        } else {
          const celsius = fahrenheitToCelsius(valor);
          alert(`${valor}°F es igual a ${celsius.toFixed(2)}°C`);
        }
      } else {
        console.log("Ingrese un valor numérico válido.");
      }
    } else {
      console.log("No ingresó un valor válido.");
    }
  } else {
    console.log("Seleccione una opción válida.");
  }
} else {
  console.log("No seleccionó una opción.");
}*/

//--------------CONTADOR DE PALABRAS----------

const oracionInput = prompt("Ingrese una oración:");

if (oracionInput !== null) {
  const palabras = oracionInput.trim().split(/\s+/);
  const cantidadPalabras = palabras.length;

  alert(`La oración tiene ${cantidadPalabras} ${cantidadPalabras === 1 ? "palabra" : "palabras"}.`);
} else {
  alert("No ingresó una oración válida.");
}








