import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthNav from './AuthNav'


export default function Auth() {
  return (
    <NavigationContainer>
        <AuthNav/>
    </NavigationContainer>
  )
}