/*1) Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de Diseño
Estructurado de Algoritmos*/

// let totalMaterias = parseInt(prompt('¿Cuántas materias estás cursando?'))
// let calificaciones = [];

// for (let i = 0; i < totalMaterias; i++) {
//   let numero = i+1;
//   let calificacion = parseInt(prompt(`Dame tu calificación ${numero}`));
//   calificaciones.push(calificacion);
// }

// console.log(calificaciones);
// let suma = 0,
//   promedio = 0;

// // Calculando la suma de todas las calificaciones
// calificaciones.forEach(function (calificacion) {
//   // suma = suma + calificacion;
//   suma += calificacion;
// });

// // Calculando el promedio
// promedio = suma/totalMaterias;
// console.log(`Tu promedio obtenido es ${promedio}`);

/*2) Leer 10 números y obtener su cubo y su cuarta.*/

// for (let i = 0; i < 10; i++) {
//     let num = i+1;
//     let valornum = parseInt(prompt(`Ingrese el valor del número ${num}`));
//     cubo = Math.pow(valornum,3);
//     cuarta = Math.pow(valornum,4);
//     console.log(`El valor del número ${num} es ${valornum} y elevado al cubo es ${cubo} y elevado a la cuarta es ${cuarta}`);
//   }

/*3) Leer 10 números e imprimir solamente los números positivos*/

// for (let i = 0; i < 10; i++) {
//     let numuno = i+1;
//     let valornumdos = parseInt(prompt(`Ingrese el valor del número ${numuno}`));
//     if(valornumdos > 0){
//         console.log(`El valor es ${valornumdos} y es un número positivo`);
//     }else 
//         console.log(`El valor es ${valornumdos} y no es positivo`);
//   }

/*4) Leer 20 números e imprimir cuantos son positivos, cuantos negativos y cuantos
neutros.*/

// let positivos=0;
// let negativos=0;
// let neutros=0;
// for (let i = 0; i < 20; i++) {
//     let numdos = i+1;
//     let valornumtres = parseInt(prompt(`Ingrese el valor del número ${numdos}`));
//     if(valornumtres == 0){
//         neutros=neutros+1;
//         console.log(`El valor es ${valornumtres} es número neutro`);
//     }else if(valornumtres<0){
//         negativos=negativos+1;
//         console.log(`El valor es ${valornumtres} es número negativo`);
//     }else {
//         positivos=positivos+1;
//         console.log(`El valor es ${valornumtres} es número positivo`);
//     }
//   }
//   console.log(`El total de números positivos son ${positivos}`);
//   console.log(`El total de números negativos son ${negativos}`);
//   console.log(`El total de números neutros son ${neutros}`);



/*5) Leer 15 números negativos y convertirlos a positivos e imprimir dichos números.*/

// for (let i = 0; i < 15; i++) {
//     let numtres = i+1;
//     let valornum4 = parseInt(prompt(`Ingrese el valor del número ${numtres}`));

//     if(valornum4 == 0){
//         console.log(`El valor  ${valornum4} es número neutro`);
//     }else if(valornum4 <0 ){
//          numConvpositivo=Math.abs(valornum4);
//          console.log(`El valor ${valornum4} es número negativo, y convertido a positivo es ${numConvpositivo}`);
//     }else {
//         console.log(`El valor ${valornum4} es número positivo`);
//     }  
// }

/*6) Suponga que se tiene un conjunto de calificaciones de un grupo de 40 alumnos.
Realizar un algoritmo para calcular la calificación media y la calificación mas baja de
todo el grupo.*/

// let calBaja=0;
// let suma=0;
// for (let i = 0; i < 4; i++) {
//         let cal= i+1;
//         let calInd= parseInt(prompt(`Ingrese la calificación No. ${cal}`));
    
//         calBaja = calBaja + cal;
//         if(calInd < calBaja){
//             calBaja=calInd;
//         }
//         suma=suma+valornum4;

//         calGrupo.push(calInd);

//     }




/*7) Calcular e imprimir la tabla de multiplicar de un numero cualquiera. Imprimir el
multiplicando, el multiplicador y el producto.*/

// let multiplicando= parseInt(prompt(`Ingrese el número de la tabla de multiplicar a visualizar.`));

// for (let i = 0; i < 10; i++){
//     multiplicador=i+1;
//     producto=multiplicando*multiplicador;
//     console.log(`${multiplicando} * ${multiplicador} = ${producto}`);
// } 



/*8) Simular el comportamiento de un reloj digital, imprimiendo la hora, minutos y
segundos de un día desde las 0:00:00 horas hasta las 23:59:59 horas*/

// for(let horas=0; horas<24; horas++)
// {
//     for (let minutos = 0; minutos < 60; minutos++) {
//         for (let segundos = 0; segundos < 60; segundos++) {
//             console.log(`${horas}:${minutos}:${segundos}`);   
//         }
//     }
// }


/*9) Una persona debe realizar un muestreo con 50 personas para determinar el promedio
de peso de los niños, jóvenes, adultos y viejos que existen en su zona habitacional. Se
determinan las categorías con base en la sig, tabla:
CATEGORIA
EDAD
Niños
0 - 12
Jóvenes
13 - 29
Adultos
30 - 59
Viejos
60 en adelante*/

// let niños=0,jovenes=0,adultos=0, viejos=0;

//         for(i=0; i<5; i++ ){
//             let persona=i+1
//             let edadPersona = parseInt(prompt(`Persona No. ${persona}Ingrese su edad`));
//             let pesoPersona = parseFloat(prompt(`Persona No. ${persona}Ingrese su peso`));

//             if(edadPersona >= 12 && edadPersona<=29 ){
                
//             }else if (edadPersona <= 12){
//                 pesoNino=pesoNino+pesoPersona;
//                 nino=nino+1;
//                 promPesoNinos=pesoNino/nino;
//             }else if(edadPersona<=29)
//             {
//                 pesoJoven=pesoJoven+pesoPersona;
//                 joven=joven+1;
//                 promPesojoven=pesoJoven/joven;

//             }

            
//         }

//         let porcentajeEle1=(contElefantes1/elefantesMuestra)*100;
//         let porcentajeEle2=(contElefantes2/elefantesMuestra)*100;
//         let porcentajeEle3=(contElefantes3/elefantesMuestra)*100;
//         console.log(`el porcentaje de elefantes entre 0 y 1 años es ${porcentajeEle1}`);
//         console.log(`el porcentaje de elefantes entre 1 y 3 años es ${porcentajeEle2}`);
//         console.log(`el porcentaje de elefantes igual o mayores que 3 años es ${porcentajeEle3}`);
//             break;

/*10) Al cerrar un expendio de naranjas, 15 clientes que aun no han pagado recibirán un
15% de descuento si compran mas de 10 kilos. Determinar cuanto pagara cada cliente y
cuanto percibirá la tienda por esas compras.*/

// let precioN = parseFloat(prompt(`Ingrese el precio por kilo de la naranja`));
//  let totalTienda=[];
// for (let i = 0; i < 4; i++)
//  {
//     let cliente=i+1;
//     let kilosN = parseInt(prompt(`Cliente ${cliente} ¿Cuántos kilos de naranja compró ?`));
//     if(kilosN > 10){
//         let totalPgo=kilosN*precioN;
//         let descuento=totalPgo*0.15;
//         let totalPgofinal=totalPgo-descuento;
//         console.log(`Usted cliente ${cliente} compró ${kilosN}Kg. su total a pagar es $${totalPgofinal}`);
//         totalTienda.push(totalPgofinal);
//     }else{
//         let totalPgo=kilosN*precioN;
//         let totalPgofinal=totalPgo;
//         console.log(`Usted cliente ${cliente} compró ${kilosN}Kg. su total a pagar es $${totalPgofinal}`);
//         totalTienda.push(totalPgofinal);
//     }
//  }
// //  console.log(totalTienda);
//  let sumaGanancia=0;

//  totalTienda.forEach(function(kilosN) {
//      sumaGanancia += kilosN;
//  });

//  console.log(`las ganancias fueron $ ${sumaGanancia}`);

/*11) En un centro de verificación de automóviles se desea saber el promedio de puntos
contaminantes de los primeros 25 automóviles que lleguen. Asimismo se desea saber los
puntos contaminantes del carro que menos contamino y del que mas contamino.*/




/*12) Un entrenador le ha propuesto a un atleta recorrer una ruta de cinco kilómetros
durante 10 días, para determinar si es apto para la prueba de 5 Kilómetros o debe buscar
otra especialidad. Para considerarlo apto debe cumplir por lo menos una de las
siguientes condiciones:
- Que en ninguna de las pruebas haga un tiempo mayor a 16 minutos. 
- Que al menos en una de las pruebas realice un tiempo mayor a 16 minutos.
- Que su promedio de tiempos sea menor o igual a 15 minutos.*/



// let tiempo=0;
// let tiempoTotal=[];
// for (let i = 0; i < 4; i++)
//  {
//     let dia=i+1;
//     let tiempoCorrido = parseFloat(prompt(`Ingresa el tiempo recorrido del día${dia}`));


//     if(tiempoCorrido > 16){
//         tiempo16=tiempo16+1;
//         tiempoTotal.push(tiempoCorrido);
//     }else {
//         console.log('usted no es apto');

//     }
//  }
// //  console.log(totalTienda);
//  let promedioCorr=0;
//  let sumaCorr=0;

//  tiempoTotal.forEach(function(tiempoCorrido) {
//      sumaCorr += tiempoCorrido;
//  });

//  console.log(`el tiempo corrido fue de $ ${sumaCorr}`);



/*13) Un Zoólogo pretende determinar el porcentaje de animales que hay en las siguientes
tres categorías de edades: de 0 a 1 año, de mas de 1 año y menos de 3 y de 3 o mas años.El zoológico todavía no esta seguro del 
animal que va a estudiar. Si se decide por
elefantes solo tomara una muestra de 20 de ellos; si se decide por las jirafas, tomara 15
muestras, y si son chimpancés tomara 40.*/

let animal = (prompt(`Ingrese el animal a estudiar Elefantes, Jirafas o Chimpances`));
let contElefantes1=0,contElefantes2=0,contElefantes3=0;
let contJirafas1=0,contJirafas2=0,contJirafas3=0;
let contChimpances1=0,contChimpances2=0,contChimpances3=0;

switch (animal){
    
    case 'Elefantes':
        let elefantesMuestra=5;
        for(i=0; i<5; i++ ){
            let elefante=i+1;
            let edadElefante = parseInt(prompt(`Ingrese la edad del elefante No. ${elefante}`));
            if (edadElefante >0 && edadElefante <2){
                 contElefantes1=contElefantes1+1;
            } else if (edadElefante>1 && edadElefante<3){
                contElefantes2=contElefantes2+1;
            }else if(edadElefante>=3){
                contElefantes3=contElefantes3+1;
            }       
        }

        let porcentajeEle1=(contElefantes1/elefantesMuestra)*100;
        let porcentajeEle2=(contElefantes2/elefantesMuestra)*100;
        let porcentajeEle3=(contElefantes3/elefantesMuestra)*100;
        console.log(`el porcentaje de elefantes entre 0 y 1 años es ${porcentajeEle1}`);
        console.log(`el porcentaje de elefantes entre 1 y 3 años es ${porcentajeEle2}`);
        console.log(`el porcentaje de elefantes igual o mayores que 3 años es ${porcentajeEle3}`);
            break;

       case 'Jirafas' :
        let jirafasMuestra=5;
        for(i=0; i<5; i++ ){
            let jirafa=i+1;
            let edadJirafa = parseInt(prompt(`Ingrese la edad de la Jirafa No. ${jirafa}`));
           if (edadJirafa >0 && edadJirafa <2){
              contJirafas1=contJirafas1+1;
           } else if (edadJirafa>1 && edadJirafa<3){
              contJirafas2=contJirafas2+1;
           }else if(edadJirafa>=3){
              contJirafas3=contJirafas3+1;
           }
       }
        let porcentajeJirafa1=(contJirafas1/jirafasMuestra)*100;
        let porcentajeJirafa2=(contJirafas2/jirafasMuestra)*100;
        let porcentajeJirafa3=(contJirafas3/jirafasMuestra)*100;
       console.log(`el porcentaje de jirafas entre 0 y 1 años es ${porcentajeJirafa1}`);
       console.log(`el porcentaje de jirafas entre 1 y 3 años es ${porcentajeJirafa2}`);
       console.log(`el porcentaje de jirafas igual o mayores que 3 años es ${porcentajeJirafa3}`);
       break;

       case 'Chimpances' :
        let chimpancesMuestra=5;
            for(i=0; i<5; i++ ){
              let chimpance=i+1;
                let edadChimpance = parseInt(prompt(`Ingrese la edad del Chimpancé No. ${chimpance}`));
           if (edadChimpance >0 && edadChimpance <2){
              contChimpances1=contChimpances1+1;
           } else if (edadChimpance>1 && edadChimpance<3){
              contChimpances2=contChimpances2+1;
           }else if(edadChimpance>=3){
              contChimpances3=contChimpances3+1;
           }
       }
        let porcentajeChimpances1=(contChimpances1/chimpancesMuestra)*100;
        let porcentajeChimpances2=(contChimpances2/chimpancesMuestra)*100;
        let porcentajeChimpances3=(contChimpances3/chimpancesMuestra)*100;
       console.log(`el porcentaje de jirafas entre 0 y 1 años es ${porcentajeChimpances1}`);
       console.log(`el porcentaje de jirafas entre 1 y 3 años es ${porcentajeChimpances2}`);
       console.log(`el porcentaje de jirafas igual o mayores que 3 años es ${porcentajeChimpances3}`);
       break;

       default:
           console.log('Solo Elefantes, Jirafas y Chimpances pueden ser evaluados');
    }

    console.log(`el porcentaje de jirafas entre 0 y 1 años es ${porcentajeChimpances1}`);
       console.log(`el porcentaje de jirafas entre 1 y 3 años es ${porcentajeChimpances2}`);
       console.log(`el porcentaje de jirafas igual o mayores que 3 años es ${porcentajeChimpances3}`);