// Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
    {item.name &&
      <Text>Name: {item.name}</Text>
    }

      <Text>Email: {item.email}</Text>
     
      <Text>Password: {item.password}</Text>

      {item.confirmPassword &&
      <Text>Confirm Password: {item.confirmPassword}</Text>
    }


   
      
    

    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: 'deepskyblue',
  },
});

export default Card;
