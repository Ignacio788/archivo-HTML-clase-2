Saludo = 'Hola Usuario ';
pregunta = 'Como Estas? ';
frase = Saludo + pregunta;
// Saludo = "Hola Usuario "; PORFAVOR TENE CUIDADO CUANDO ESCRIBIS
// pregunta = "Como Estas? "; SUPER IMPORTANTE
// frase = saludo + pregunta
//ESTO PERMITE ESCRIBIR POR TEXTO Y HACER QUE SE VEA EN LA PAGINA.

document.write(frase);
//para usar el (concat, que es la concatenacion)
//si o si necesitamos un string("8")
numero1 = '52';
numero2 = 7;
frase = numero1.concat(numero2);
document.write(frase);

{
	saludo = 'Hola, que tal todo';
	let nombre = prompt('Hola, como estas cual es tu nombre ');
	Frase = saludo + ' ' + nombre;
	//Aun no funciona
	// SUPER IMPORTANTE ´ ´ ´ ´ ´ ´ ´ ´
	('´ ´ '); // NO ES LO MISMO QUE COMILLAS SIMPLES.
}
// CIREL estuvo aqui holaaaaaaaaaa
//OPERADORES DE Comparacion
{
	//COMPARAN 2 OPERACIONES Y DEVUELVEN UN VALOR BOOLEAN QUE REPRESENTA
	//LA RELACION DE SUS VALORES, SE REVELA CON TRUE O FALSE
	let numero = 27;
	let numero2 = 23;
	let numero3 = 27;
	//el = (igual) asigna no compara, para comparar se usa (==)

	document.write(numero == numero2); // aca me marca false, 27 no es igual a 23
	document.write(numero == numero3); // aca me marca true, 27 == 27
	//si le agregamos (===) iguales, significa que estamos comparando el mismo let mas el resultado
	//tiene que ser extrictamente igual (===)
}

{
	let numero = 527;
	let numero1 = 300;
	document.write(numero <= numero1); //numero es menor o igual que numero1?
}
{
	numero1 = 12;
	numero2 = 24;
	numero3 = 10;
	numero4 = 10;
	afirmacion = numero1 < numero2;
	afirmacion1 = numero1 != numero2; //numero 1 es distinto que numero 2 (!=) distinto
	afirmacion3 = numero3 == numero4;
	document.write(afirmacion3 && afirmacion1); //si las 2 condiciones se cumplen va hacer verdadero
	document.write(afirmacion || afirmacion1); // Conque 1 sea verdadera todas son verdaderas, no importa que las demas sean falsas
}

//CONDICIONALES SIEMPRE SE ACTIVA CUANDO ES VERDADERO
{
	nombre = 'Ignacio'; // aca podemos hacer una ejecucion si mi nombre es ignacio.
	//que diga algo, si pusiera otro nombre que diga otra cosa para ese nombre

	if (nombre == 'Ignacio videla') {
		//como no dice Ignacio Videla, no se activara el mensaje.
		alert('Tu nombre es ' + nombre);
	} else if (nombre === 'Ignacio') {
		alert('Tu nombre es ' + nombre);
	} else if (nombre === 'sofia ') {
		alert('Tu nombre es buenardo');
	} else {
		alert('Tu nombre no esta en la lista de archivos'); // con let nombre= ignacioa, no esta en la lista.
	}
}

{
	nombre = 'Ignacio';
	apellido = 'Videla Sanchez';

	if (nombre == 'Ignacio' && apellido == 'Videla Sanchez') {
		alert('Bienvenido señor ' + nombre + '' + apellido);
	}
}
