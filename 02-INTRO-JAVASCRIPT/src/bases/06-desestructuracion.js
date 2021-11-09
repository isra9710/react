//Desestructuración
//Asignación Desestructurante

const persona ={
    nombre:'Tony',
    edad:45,
    clave: 'Ironman',
    rango: 'Soldado',
  
  }
  
  const {nombre, edad, clave} = persona;
  
  /*console.log(persona.nombre);
  console.log(persona.edad);
  console.log(persona.clave);
  console.log(nombre);
  console.log(edad);
  console.log(clave);*/
  
  
  
  //Desestructuración cómo parámetro
  const retornaPersona = ({nombre, edad, rango='Capitán', clave}) => 
  //console.log(nombre, edad,rango);
    ({
      nombreClave:clave,
      anios:edad,
      latlng:{
        lat:14.1232,
        lng: -12.3232
      }
      
    });
  //const avenger = retornaPersona(persona);
  //const {nombreClave, anios} = avenger;
  //console.log(avenger)
  //const {nombreClave, anios, latlng} = retornaPersona(persona);

  //Si se quiere obtener el valor de un objeto por separado
  const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona);
  
  console.log(nombreClave,anios);
  //console.log(latlng);
  console.log(lat, lng);