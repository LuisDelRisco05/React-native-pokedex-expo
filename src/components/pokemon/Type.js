import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { map, capitalize } from 'lodash';
import getColorByPokeType from '../../utils/getColorByPokeType';


export default function Type({types}) {

    return (
    
            <View style={styles.content}>
                {map(types, item => (

                    <View 
                        key={item.type.name}
                        style={{
                            ...styles.pill,
                            backgroundColor: getColorByPokeType(item.type.name),
                          }}    
                    >
                    <Text style={styles.name}>{capitalize(item.type.name)}</Text>
                    </View>
                ))}
            </View>
    )
};

const styles = StyleSheet.create({
    content: {
      marginTop: 50,
      flexDirection: "row",
      alignItems: "center",  //vertical
      justifyContent: "center", // horizontal
    },
    pill: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 20,
      marginHorizontal: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "600"
    }
  });
