import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../../Screen/Login'
import SignupScreen from '../../Screen/Signup'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Menu from '../../Screen/Menu';

const Tab = createBottomTabNavigator();

export default function AuthNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    tabBarLabel: "Iniciar Sesion",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
                name='Login'
                component={LoginScreen}
            />
            <Tab.Screen
                name='Signup'
                component={SignupScreen}
                options={{
                    title:'',
                    headerTransparent:true,
                    tabBarLabel: "Registro",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="edit" color={color} size={size} />
                    ),
                }}

            />
           
        </Tab.Navigator >
    )
}