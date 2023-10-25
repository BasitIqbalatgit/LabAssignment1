import React, { useState } from 'react';
import { View, Text, TextInput,Keyboard, StyleSheet, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation} ) => {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const data=[];

  const handleLoginNavigation=()=>{
    navigation.navigate('Home',{ data: [...data, {  email, password}] })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <ImageBackground
          style={styles.background}
          source={require('../images/2.png')}
          resizeMode='stretch'
        >
          <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name="envelope" size={20} color="gray" style={styles.icon} />
              </View>
              <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(t)=>setEmail(t)}
                autoCapitalize='none' autoCorrect={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name="lock" size={20} color="gray" style={styles.icon} />
              </View>
              <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} autoCapitalize='none'
                autoCorrect={false} value={password} onChangeText={(t)=>setPassword(t)}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}              
              onPress={handleLoginNavigation}
            >
              <Text style={styles.buttonText}>Login</Text>
              <Icon name="arrow-right" size={20} color="white" style={styles.buttonIcon} />
            </TouchableOpacity>

            <View style={{flexDirection:"row", marginTop:26}}>
              <Text>Don't have an Account? </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={{textDecorationLine:"underline", color:"deepskyblue"}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 54,
    fontWeight: 'bold',
    color: 'deepskyblue',
    marginBottom: 90,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: 350,
    height: 40,
    borderColor: 'deepskyblue',
    borderWidth: 1,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    backgroundColor: 'deepskyblue',
    borderRadius: 20,
    marginTop: 8,
    marginStart: 200,
    width: 150,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default Login;
