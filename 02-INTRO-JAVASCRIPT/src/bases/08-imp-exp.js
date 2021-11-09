//import { heroes } from "./data/heroes"
 //import heroes,{owners} from '../data/heroes.js';
import heroes from '../data/heroes.js';

 /*const getHeroeById = (id) =>{
   return heroes.find((heroe)=>{
     if(heroe.id === id){
       return true;
     }else{
       return false;
     }
   });
 }*/
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);


//console.log(getHeroeById(2));
//console.log(heroes);


//const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


//console.log(getHeroesByOwner('DC'));
//console.log(getHeroesByOwner('Marvel'));