const persona = {
    nombre:'Israel',
    apellido:'Ríos',
    edad: 24,
    direction:{
      ciudad:'New York',
      zip: 55111314,
      lat:14.2324,
      lng: 34.982398
    }
  };
  
  //console.table(persona);
  //para crear un clon del objeto y no hacer referencia del mismo
  const persona2 = {...persona};
  console.log(persona);
  console.log(persona2);