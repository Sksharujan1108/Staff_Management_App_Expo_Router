import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Landing = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>

        <Link
          href = 
            'signInEmail'
           asChild
        >  
           <Button title = 'Go TO LogIn' />
        </Link>
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
