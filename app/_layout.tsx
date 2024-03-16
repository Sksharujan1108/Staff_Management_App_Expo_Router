import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'

const RootLayoutNav = () => {
  return (
    <Stack
      screenOptions = {{
        headerStyle: {
            backgroundColor: '#A0FFA3',
        }
      }}
    >
        <Stack.Screen name = 'index'
          options = {{
            headerTitle: 'Landing'
          }}
        />
        
        <Stack.Screen name = 'signInEmail/index'
          options = {{
            title: 'signInEmail',
            headerLeft: ()=>(
                <Button 
                  title = "Back" 
                  onPress={()=> 
                    router.back()
                  } 
                />
            )
          }} 
        />

        <Stack.Screen
          name = 'signInPassword/index'
          options = {{
            title:'signInPassword',
            headerLeft: ()=>(
                <Button 
                  title = "Back" 
                  onPress={()=> 
                    router.back()
                  } 
                />
            )
          }}
        />

        <Stack.Screen
          name = 'signInStaff/index'
          options = {{
            title:'signInStaff',
            headerLeft: ()=>(
                <Button 
                  title = "Back" 
                  onPress={()=> 
                    router.back()
                  } 
                />
            )
          }}
        />   

    </Stack>
  )
}

export default RootLayoutNav

const styles = StyleSheet.create({})