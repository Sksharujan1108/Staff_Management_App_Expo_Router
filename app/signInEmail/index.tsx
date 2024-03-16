import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const  SignInEmailScreen = () => {
  return (
    <View>
      <Text> WelCome </Text>

      <Link
        href = {
            'signInPassword'
        }
      > Next Screen
      </Link>

    </View>
  )
}

export default SignInEmailScreen;

const styles = StyleSheet.create({})