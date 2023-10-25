import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Homes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welllcome To Home Screen</Text>
      <Button title='Task 1 ' onPress={()=>navigation.navigate('Login')} />
      <Button title='Task 2 ' onPress={()=>navigation.navigate('TaskForm')}/>
      <Button title='Task 3 ' onPress={()=>navigation.navigate('Calculator')}/>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  }
})

export default Homes;