
/*
Crear un programa que reciba por parámetros dos números que haya
introducido el usuario y devuelva si son múltiplos o no con un booleano true o
false y muéstralo por pantalla.
*/


function ejercicio1(var1, var2){
    resto1 = var1 % var2;
    resto2 = var2 % var1;
    multiplo = (resto1 == 0) || (resto2 == 0);
    let resultado = "haa";

    if(multiplo){
        resultado = console.log('Ejercicio 1\n--------------\nLos números ' + var1 + ' y ' + var2 + ' son múltiplos.');
    }else{
        resultado = console.log('Ejercicio 1\n--------------\nLos números ' + var1 + ' y ' + var2 + ' NO son múltiplos.');
    }

    return resultado;
}





/*
Crea un programa que reciba por parámetro un número introducido por el
usuario y compruebe, si no es mayor que 100, si es primo o no, devolviendo
un valor booleano true o false y muéstralo por pantalla.
*/



function esPrimo(num){
    let resultado = true;

    for(var i = 2; i < num; i++){
        if(num % i == 0){
            resultado = false;
            break
        }
    }

    return resultado;
}


function ejercicio2(num){
    let menorCien = false;
    let resultado = "";

    menorCien = num < 100;
    

    if(menorCien){
        if( esPrimo(num) ){
            resultado = "El número " + num + " ES primo";
        }else{
            resultado = "El número " + num + " NO es primo";
        }
    }else{
        resultado = "El número " + num + " es mayor de 100";
    }

    return resultado;
}


/*
Crea un programa que reciba por parámetro una cadena de caracteres
introducida por el usuario y que muestre por pantalla cada caracter de
forma individual.
*/



function ejercicio3(cadena){
    let longitudCadena = 0;
    let letraPosicion = 0;
    let resultado = "";

    longitudCadena = cadena.length;

    for(letraPosicion; letraPosicion <= longitudCadena; letraPosicion++){
        resultado = resultado +  cadena.charAt(letraPosicion) + '\n';
        //console.log(cadena.charAt(letraPosicion));
        
        //Si el resultado sale así no entiendo porque se coloca antes de la frase en la que llamo a la función ejercicio3.
    }

    return resultado;
}


/*
Crea un programa que reciba por parámetro un nombre y una cantidad de
un alimento y cree un objeto con esas propiedades. Muestra por pantalla sus
atributos.
*/

//No fui capaz de hacerlo con los ejemplo a si que lo hice ayudado de la solución

function ejercicio4(nombre, cantidad){
    let aux_nombre = nombre;
    let aux_cantidad = cantidad;
    let resultado = "";

    var alimento = function(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad

        this.getNombre = function(){
            return this.nombre;
        }
        
        this.getCantidad = function(){
            return this.cantidad;
        }
    }

    let alimento_1 = new alimento(aux_nombre, aux_cantidad);
    resultado = "Objeto tipo Alimento con\nnombre: " + alimento_1.getNombre() + "\ncantidad: " + alimento_1.getCantidad();
    return resultado;

}


/*
Crea un programa que reciba por parámetro lado y altura y cree un objeto
Cuadrilátero con estas propiedades. Haz que tenga una función llamada
calculoArea() que muestre por pantalla el resultado.
*/

function ejercicio5(lado, altura){
    let aux_lado = lado;
    let aux_altura = altura;
    resultado = "";

    var cuadrilatero = function(lado, altura){
        this.lado = lado;
        this.altura = altura;

        this.getLado = function(){
            return this.lado;
        }

        this.getAltura = function(){
            return this.altura;
        }


        this.getArea = function(){
            area = this.lado * this.altura;
            return area;
        }
    }

    let cuadrilatero_1 = new cuadrilatero(aux_lado, aux_altura);
    resultado = "El cuadrilatero con lado: " + cuadrilatero_1.getLado() + " y altura: " + cuadrilatero_1.getAltura() + " tiene de area: " + cuadrilatero_1.getArea();
    return resultado;
}


/*
Crea un programa que calcule la media acumulada de 10 números que
introduzca el usuario y muestre por pantalla cual es la media en cada
momento.
*/

function ejercicio6(){
    num = 0;
    media = 0;
    for(i = 1; i <= 10; i++){
        numero_registrado = parseInt(prompt('Introduce un número.'));
        num = num + numero_registrado;
        media = num/10;
    }
    resultado = 'La media de los números es de: ' + media;
    return resultado;
}




/*
Crea un programa que cree 4 objetos del tipo Aventurero con los atributos
de clase, nivel y raza. Muestra por pantalla cada uno y sus atributos.
*/

function ejercicio7(){
    aux_clase = "";
    aux_nivel = "";
    aux_raza = "";

    var aventurero = function(clase, nivel, raza){
        this.clase = clase;
        this.nivel = nivel;
        this.raza = raza;

        this.toString = function(){
            resultado = "";

            resultado = "Clase = " + this.clase + "\nNivel = "+ this.nivel + "\nRaza = " + this.raza;

            return resultado;
        } 
    }
    
    let aventurero_1 = new aventurero("Guerrero", "60", "Elfo");
    let aventurero_2 = new aventurero("Cazador", "70", "Humano");
    let aventurero_3 = new aventurero("Chamán", "70", "Enano");
    let aventurero_4 = new aventurero("Brujo", "90", "Elfo");

    console.log('Aventurero 1\n' + aventurero_1.toString() + '\n--------\nAventurero 2\n' + aventurero_2.toString() + '\n--------\nAventurero 3\n' + aventurero_3.toString() + '\n--------\nAventurero 4\n' + aventurero_4.toString());

}



/*
Crea un programa que permita usar una calculadora simple. Debe ofrecer al
usuario la posibilidad de hacer sumas, restas, multiplicaciones y divisiones. El
programa debe continuar hasta que el usuario decida terminar.
*/

function ejercicio8(){
        let operacion = "";
        let resultado = "";
        let num1 = 0;
        let num2 = 0;

        operacion = prompt('Escribe el numero de la operacion\n1 Sumar\n2 Restar\n3 Multiplicar\n4 Dividir\n5 Salir');
        

        switch(operacion){
            case "1"://sumar
            num1 = parseInt(prompt('Escribe el primer número.'));
            num2 = parseInt(prompt('Escribe el segundo número.'));
            suma = num1 + num2;
            resultado = num1 + " + " + num2 + " = " + suma;
            console.log(resultado);
            ejercicio8();
            break;

            case "2"://restar
            num1 = parseInt(prompt('Escribe el primer número.'));
            num2 = parseInt(prompt('Escribe el segundo número.'));
            let resta = num1 - num2;
            resultado = num1 + " - " + num2 + " = " + resta;
            console.log(resultado);
            ejercicio8();
            break;

            case "3"://multiplicar
            num1 = parseInt(prompt('Escribe el primer número.'));
            num2 = parseInt(prompt('Escribe el segundo número.'));
            let multiplicacion = num1 * num2;
            resultado = num1 + " x " + num2 + " = " + multiplicacion;
            console.log(resultado);
            ejercicio8();
            break;

            case "4"://dividir
            num1 = parseInt(prompt('Escribe el primer número.'));
            num2 = parseInt(prompt('Escribe el segundo número.'));
            let division = num1 / num2;
            resultado = num1 + " / " + num2 + " = " + division;
            console.log(resultado);
            ejercicio8();
            break;

            case "5": //Salir de la calculadora
            break;
            
            default:
            window.alert('Escribe una de las opciones disponibles.');
            ejercicio8();
            break;
        }  
}



/*
Crea un programa que aúne todos los ejercicios anteriores. Hazlo en un
bucle, como un menú, para poder reproducir cada uno de forma individual
y que se termine cuando decida el usuario.
*/

function ejercicio9(){
    let eleccion = "";
    let continuar = true;
    
    do{
        eleccion = prompt('Selecciona el número del ejercicio que quieras ver.\nEjercicio 1\nEjercicio 2\nEjercicio 3\nEjercicio 4\nEjercicio 5\nEjercicio 6\nEjercicio 7\nEjercicio 8\nSalir 9');

        switch(eleccion){
            case "1":
                let num1 = prompt('Escribe un número.');
                let num2 = prompt('Escribe otro número para ver si es multiplo del anterior.');
                ejercicio1(num1, num2);
                

                break;

            case "2":
                let num = prompt('Escribe un número.');
                console.log ('Ejercicio 2\n------------\n' + ejercicio2(num) );
                

                break;

            case "3":
                let texto = prompt('Escribe una cadena de caracteres para ver el resultado');

                console.log( 'Ejercicio 3\n-------------\n' + ejercicio3(texto) );
                

                break;

            case "4":
                nombre = prompt('Escribe el nombre del alimento:');
                cantidad = prompt('Escribe la cantidad del objeto:')
                resultado = ejercicio4(nombre, cantidad);
                console.log('Ejercio 4\n--------------\n' + resultado);
                

                break;

            case "5":
                lado = prompt('Escribe el lado del cuadrilatero:');
                altura = prompt('Escribe la altura del cuadrilatero:');
                resultado = ejercicio5(lado, altura);
                console.log('Ejercicio 5\n---------------\n' + resultado);
                
                break;

            case "6":
                resultado = ejercicio6();
                console.log('Ejercicio 6\n-------------\n' + resultado);
               

                break;

            case "7":
                ejercicio7();
                

                break;

            case "8":
                console.log('Ejercicio 8\n------------');
                ejercicio8();

                break;

            case "9": //Salir
                continuar = false;
                alert("Saliendo del programa...");

            default:
                console.log('La opción elegida no es correcta.');
                break;  
        }
    }while(continuar);
}

ejercicio9();