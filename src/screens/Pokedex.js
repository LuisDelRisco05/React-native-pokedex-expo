import React, { useEffect, useState } from 'react';
import {} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi, getPokemonsDeatilsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

    const [ pokemons, setPokemons ] = useState([]); 
    const [ nexturl, setNextUrl ] = useState(null);

    useEffect(() => {
        loadPokemons();
  }, []);
 
  const loadPokemons = async () => {
    try {
        const response = await getPokemonsApi(nexturl);
        const data = response.data;

        setNextUrl(response.next)

        const pokemonArray = [];

        for (const pokemon of data){
            const pokemonDetails = await getPokemonsDeatilsByUrlApi(pokemon.url);

            pokemonArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                types: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image: pokemonDetails.sprites.other["official-artwork"].front_default
            })
        }

        setPokemons([...pokemons, ...pokemonArray]);

    } catch (error) {
        console.log(error);
    }
  }
 
    return (
        <SafeAreaView>
            <PokemonList 
                pokemons={pokemons}
                loadPokemons={loadPokemons} 
                nextTo={nexturl}
            />
        </SafeAreaView>
    )
}
