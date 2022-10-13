import React from "react";
import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons, loadPokemons, nextTo}) {
  
  const loadMore = () => {
    loadPokemons()
  }
    
    return (
        <FlatList
          data={pokemons}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(pokemon) => String(pokemon.id)}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          contentContainerStyle={styles.flatListContentContainer}
          onEndReached={nextTo && loadMore} // cuando llega al final de la lista ejecuta la fn
          onEndReachedThreshold={0.1}// cuando está apunto de llegar al final
          ListFooterComponent={
            nextTo && (
              <ActivityIndicator 
              size="large"
              style={styles.spinner}
              color="#FA6C6C"
            />
            ) 
          }
        />
      );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  }
});
