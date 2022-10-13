import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { getPokemonDetailtsApi } from '../api/pokemon';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';

export default function Pokemon({route, navigation}) {
    const { params } = route;

    const [ pokemon, setPokemon ] = useState(null);

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => (
              <Icon
                name="arrow-left"
                color="#fff"
                size={20}
                style={{ marginLeft: 20 }}
                onPress={navigation.goBack}
              />
            ),
          });

    }, [navigation, params])

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailtsApi(params.id);
                setPokemon(response.data);
            } catch (error) {
                navigation.goBack();
            }
        })()
    }, [params]);

    if(!pokemon) return null;

    return (
      <ScrollView>
        <Header
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other["official-artwork"].front_default}
          type={pokemon.types[0].type.name}
        />
        <Type types={pokemon.types} />
        <Stats stats={pokemon.stats}/>
      </ScrollView>
    );
}
