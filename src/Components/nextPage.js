// Home.js
import React from 'react';
import { FlatList, StyleSheet, View,Text } from 'react-native';
import CardTwo from './Card'; // Import your Card component
import { Button } from 'react-native-elements';

const NextPage = ({ route, navigation }) => {
    const { data } = route.params;
  
    return (
      <View style={styles.container}>
      
        <FlatList
          data={data}
          renderItem={({ item }) => <View>
          <Text>Name: {item.name}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Gender: {item.gender}</Text>
          <Text>Country: {item.selectedCountry}</Text>
          <Text>Subject: {item.selectedSubjects}</Text>
          <Text>Skills: {item.skills}</Text>
          <Text>Address: {item.address}</Text></View>}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  };
  
  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default NextPage;
