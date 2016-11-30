import request from 'utils/request';

 export async function loadPokemon() {
   return request('http://pokeapi.co/api/v2/pokemon');
 }
