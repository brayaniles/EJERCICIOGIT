/* 1. Colocar las condiciones necesarias para que se cumpla la salida en consola.

var numero1 = 5;
var numero2 = 8;
if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
    console.log("numero2 es positivo");
}
if(numero1 > 0 || numero1 !=0) {
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
};


2. El factorial de un número entero n es una operación matemática que consiste en
multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5
(escrito como 5!) es igual a 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura crear un script que calcule la factorial de un número entero

let num = 5;
if (num === 0 || num === 1) {
    console.log("factorial = 1");
}
else {for (var i = num - 1; i >=1; i--) {
    num *= i;
}
    console.log("factorial = " + num);
};


3.- Escribir el código de una función a la que se pasa como parámetro un número entero
y devuelve como resultado una cadena de texto que indica si el número es par o impar
Mostrar por pantalla el resultado devuelto por la función

function numImpar(num) {
    if(num % 2 == 0) {
        return console.log("numero par")
    }
    else {
        return console.log ("numero impar");
    }
}
numImpar(20);


4.- Definir una función determine si la cadena de texto que se le pasa como parámetro
es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”

function palindromo(texto) {
    var re = /[^A-Za-z0-9]/g;
    texto = texto.toLowerCase().replace(re, '');
    var len = texto.length;
    for (var i = 0; i < len/2; i++) {
        if (texto[i] !== texto[len - 1 - i]) {
            return console.log("no es palindromo");
        }
    }
    return console.log("si es palindromo");
}
palindromo("la ruta nos aporto otro paso natural");


5.- Definir la siguiente jerarquía de objetos:
1. Clase Persona con las propiedades nombre y edad
1.1. Crear el método obtDetalles() este método imprimirá en consola todos los
atributos de la persona.
1.2. El constructo recibirá nombre y edad y los asignará a los atributos
internos.
2. Clase Estudiante, hereda de Persona, e incluye las propiedad de calificación
2.1. Sobreescribir el método obtDetalles() para imprimir en consola los
detalles de persona y la calificación
3. Clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel.
3.1. Inicializar en el constructor todos los parámetros de persona así como asignatura y nivel.
3.2. El constructor tendrá que estar habilitado para que en caso de que no se especifique la
asignatura esta sea igual a JS y el nivel igual a básico.
3.3. Sobreescribir el método obtener detalles para imprimir todas las propiedades de
persona más todas las propiedades de profesor.
4. Clase grupo que contendrá las propiedades profesor promedio y estudiantes.
4.1. Crear un constructor que acepte y asigne el objeto profesor y el arreglo de estudiantes
que pertenecen al grupo.
4.2. Crear el método calificar que itere sobre el arreglo de estudiantes pertenecientes a ese
grupo. En cada iteración se deberá asignar asignar una calificación al estudiante
aleatoria (Math.random() * 10)
4.3. Crear un método que calcule el promedio de todos los estudiantes en ese curso.
4.4. Crea el método obtdetalles() que imprime los detalle del profesor y los detalles de todos
los estudiante.
5. Todo junto.
5.1. Crea un arreglo llamado estudiantes.
5.1.1. Agrega 6 estudiantes con diferentes nombres y edades.
5.2. Crea un objeto de tipo profesor el cual solo inicializarás con nombre y edad
5.3. Crea un grupo al cual agregas el arreglo de estudiantes
_______________________________________________________________________________________________
_______________________________________________________________________________________________
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de
la jerarquía


class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
var obtDetalles = new Persona ("Juan", 26);
console.log(obtDetalles);
class Estudiante extends Persona {
    constructor (nombre, edad, calificacion) {
        super(nombre, edad);
        this.calificacion = calificacion;
    }
}
var obtDetalles = new Estudiante ("Juan", 26, 10);
console.log(obtDetalles);
class Profesor extends Persona {
    constructor (nombre, edad, asignatura, nivel) {
        super(nombre, edad);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
}
var obtDetalles = new Profesor ("Juan", 26, "JS", "basico");
console.log(obtDetalles);
class Grupo extends Profesor {
    constructor (promedio, estudiantes) {
        super(Profesor);
        this.promedio = promedio;
        this.estudiantes = estudiantes;
    }

}
var grupoDeEstudiantes = new Grupo ();
console.log(Grupo);


Bonus: Escribe una function que genere todas las posibles combinaciones con las letras de
dicho string. (La entrada la puede limitar a 3 letras) (15 puntos);

let texto = "CAS"
if (texto.length <= 3) {
    let combinaciones = [];
    for(let i = 0; i < texto.length; i++)
    {
        for(let j = i + 1; j< texto.length + 1; j++)
        {
            combinaciones.push(texto.slice(i , j));

        }
    }
    return console.log(combinaciones);
}
else{
    console.log("solo texto menor a 3")
}
*/