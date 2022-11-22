import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import User from '../Screen/User'
import Admin from '../Screen/Admin'
import AuthNav from './Auth/AuthNav'
import Menu from '../Screen/Menu'
import Pago from '../Screen/Pago'
import NuevaConsulta from '../Screen/NuevaConsulta'
import Historial from '../Screen/Historial'


const Stack = createNativeStackNavigator()
export default function MainNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Auth'
                component={AuthNav}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name='User'
                component={User}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name='Admin'
                component={Admin}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name='Pago'
                component={Pago}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name='Nueva'
                component={NuevaConsulta}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name='Historial'
                component={Historial}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    )
}