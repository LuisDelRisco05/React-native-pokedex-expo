import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import AccountNavegation from './AccountNavigation';
import PokedexNavegation from './PokedexNavigation';
import FavoriteNavegation from './FavoriteNavegation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
       <Tab.Navigator>

        <Tab.Screen 
            name="Account" 
            component={AccountNavegation}
            options={{
                tabBarLabel: "My Cuenta",
                tabBarIcon: ({color, size}) => (
                    <Icon name="user" color={color} size={size} />
                ),
                
            }} 
        />

        <Tab.Screen 
            name="Pokedex" 
            component={PokedexNavegation}
            options={{
                tabBarLabel:"",
                tabBarIcon: () => renderPokeball() 
            }} 
        />

        <Tab.Screen 
            name="Favorite" 
            component={FavoriteNavegation} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <Icon name="heart" color={color} size={size} />
                )
            }}
        />

       </Tab.Navigator>
    )
};

function renderPokeball() {
    return (
        <Image 
            source={require('../assets/pokeball.png')}
            style={{ width: 75, height:75, top: -15 }}
        />
    );
}