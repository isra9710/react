//Desestructuración de arreglos

const personajes = ['Gokú', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
  return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


/**
 * Tarea
 * 1.- El primer valor del arreglo se llamará nombre
 * 2.- El segundo se llamará setNombre
**/ 

const useState = (valor) => {
  return [valor, ()=>{console.log('Hola Mundo')}];
}

const arr = useState('Gokú');
console.log(arr);
arr[1]();

const [nombre, setNombre] = useState('Gokú');
console.log(nombre);
setNombre();



