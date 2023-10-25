import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Welllcome To Home Screen</Text>
      <Button title='Task 1 ' onPress={()=>navigation.navigate('Login')} />
      <Button title='Task 2 ' onPress={()=>navigation.navigate('TaskForm')}/>
      <Button title='Task 3 ' onPress={()=>navigation.navigate('calculator')}/>
    </View>
  )
}

export default Home