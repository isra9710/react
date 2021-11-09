import { getHeroeById } from "./bases/08-imp-exp";


//const promesa = new Promise((resolve, reject)=> {
  //setTimeout(() => {
    /*console.log('2 segundos después');
    resolve();*/
    //Tarea:
    //Importar getHeroeById()
    //console.log('Promesa \n')
    //const heroe = getHeroeById(2);
    //Para mandar lo que sea al "then" de la promesa, basta con pasarlo como argumento
    //resolve(heroe);
    //Para usar el reject se neceita manejar el error, es decir, un catch
    //reject('No se pudo encontrar el héroe');
  //}, 2000);
//});

//promesa.then((heroe)=>{
  //console.log('Heroe',heroe);
//})
//.catch(e => console.warn(e));*/ 

const getHeroeByIdAsync = (id) =>{
   //La siguiente línea es para poder llamar a la función
  //Y poder acceder a los métodos de una promesa
  return  new Promise((resolve, reject)=> {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if(heroe){
        resolve(heroe);
      }else{
        reject('No se pudo encontrar el héroe');
      }
    }, 2000);
  });
}


getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);