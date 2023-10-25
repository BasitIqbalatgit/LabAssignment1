import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Homes = ({navigation}) => {
  return (
    <ImageBackground
    style={styles.back}
    source={require('../images/3.png')}
    resizeMode='stretch'>
    <View style={styles.container}>
      <Text style={styles.t}>Welllcome To Home Screen</Text>
      <View style={styles.inline}>
      <Button title='Task 1 ' onPress={()=>navigation.navigate('Login')} />
      <Button title='Task 2 ' onPress={()=>navigation.navigate('TaskForm')}/>
      <Button title='Task 3 ' onPress={()=>navigation.navigate('Calculator')}/>
      </View>
    </View>
    </ImageBackground>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  },
  inline:{
    flexDirection:"row",
    justifyContent:"space-between"

  },

  t:{
    color:'skyblue',
    fontSize:30,
  marginBottom:10
  },
  back: {
    flex: 1,
    width: '100%',
    height: '100%',
  },


})

export default Homes;