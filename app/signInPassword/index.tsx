import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const SignInPasswordScreen = () => {
  return (
    <View>
      <Text>SignInPasswordScreen</Text>

      <Link
        href = 
            '/signInStaff'
            asChild
        
      >
        <Button
          title = "Press Me" 
        />
      </Link>
    </View>
  )
}

export default SignInPasswordScreen

const styles = StyleSheet.create({})