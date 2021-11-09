const active = true;

/*let mensaje = '';

if(!activo){
  mensaje = 'activo';
}else{
  mensaje = 'Inactivo';
}*/


//const mensaje = ( active) ? 'Activo':'Inactivo';
const mensaje = active && 'Activo';
console.log(mensaje);