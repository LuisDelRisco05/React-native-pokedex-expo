import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Image, View } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokeType from '../../utils/getColorByPokeType';

export default function Header({name, order, image, type}) {

    const color = getColorByPokeType(type);
    const bgStyles = { backgroundColor: color, ...styles.bgStyles};

    return (
        <>
            <View style={bgStyles} />
        
            <SafeAreaView style={styles.content}>

                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
                </View>

                <View style={styles.contentImg}>
                    <Image source={{uri: image}} style={styles.image} />
                </View>

            </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    bgStyles: {
        width: "100%",
        height: 470,
        position: "absolute", //con esto el objeto que estaba abajo se coloco encima gracias a absolute
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform : [{ scaleX: 2 }],
    },
    content: {
      marginHorizontal: 20,
      marginTop: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 37
    },
    order: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 10
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
    },
    
})
