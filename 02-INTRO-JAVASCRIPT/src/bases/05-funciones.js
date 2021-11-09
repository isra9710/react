//Funciones JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
  }
  
  const saludar2 = (nombre)=>{return `Hola, ${nombre}`;
  }
  
  const saludar3 = (nombre)=>`Hola, ${nombre}`;
  const saludar4 = ()=>`Hola mundo`;
  console.log(saludar('Israel'));
  console.log(saludar2('Israel2'));
  console.log(saludar3('Israel3'));
  console.log(saludar4());
  
  /*Para devolver un objeto con la función de flecha
  se necesitan parentesis*/
  const getUser = () => ({
    uid:'ABC123',
    username: 'El_papi1502',
  })
  
  console.log(getUser());
  
  const user = getUser();
  console.log(user);
  /* Tarea
  1-Transforma a una función de flecha
  2.-Tiene que retornar un objeto implícito
  3.-Pruebas
  */
  
  /*function getUsuarioActivo(nombre){
      return{
        uid:'ABC567',
        username:nombre,
      }
  }*/
  
  const getUsuarioActivo = (nombre) => ({
    uid:'ABC567',
    username:nombre,
  })
  
  
  //const usuarioActivo = getUsuarioActivo('Israel');
  const usuarioActivo = getUsuarioActivo('Israel');
  console.log(usuarioActivo);
  