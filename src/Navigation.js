import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton/index';

import HomeScreen from './screens/Home/index';
import WalletScreen from './screens/Wallet/index';
import PayScreen from './screens/Pay/index';


const Tab = createBottomTabNavigator();

const icons = {
    Home: { 
        lib: AntDesign,
        name: 'home',
    },

    Wallet: { 
        lib: AntDesign,
        name: 'creditcard',
    },

    /*Pay: { 
        lib: AntDesign,
        name: 'home',
    },*/

    Notifications: { 
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },

    Settings: { 
        lib: AntDesign,
        name: 'setting',
    },


}

export default function Navigation() {
    return (
        <Tab.Navigator
        initialRouteName="Wallet"
        screenOptions={({ route, navigation }) =>({
            tabBarIcon: ({ color, size, focused })=>{
                if(route.name==='Pay'){
                    return (
                    
                    <PayButton
                    onPress = {()=> navigation.navigate('Pay')}
                    focused={focused}
                    />);
                }
                const {lib: Icon, name } = icons[route.name]

                return <Icon name={name} size={size} color ={color}/>;
            },
        })}
        tabBarOptions={{
            style:{
                backgroundColor: '#131418',
                borderTopColor: 'rgba(255,255,255, 0.5)',
            },
            activeTintColor: '#fff',
            inactiveTintColor:'#92929c',
        }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Início',
                }}
            />

            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    title: 'Carteira',
                }}
            />

            <Tab.Screen
                name="Pay"
                component={PayScreen}
                options={{
                    title: '',
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={PayScreen}
                options={{
                    title: 'Notificações',
                }}
            />

            <Tab.Screen
                name="Settings"
                component={PayScreen}
                options={{
                    title: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    );
}