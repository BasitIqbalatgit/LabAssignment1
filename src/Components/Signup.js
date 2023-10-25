import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
const Register = ({ navigation }) => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const data = [];

  // const handleButtonPress = () => {
  //   setshowdata(true);
  //   // setdata([...data,{name,email,password,pw}]);
  //   setname("");
  //   setemail("");
  //   setpassword("");
  //   setpw("");
  // }


  const handleSignupNavigation = () => {
    navigation.navigate('Home', { data: [...data, { name, email, password, confirmPassword }] });
  };


  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/2.png')}
      resizeMode='stretch'
    >
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.loginText}>Sign up</Text>
        {/* Name -----------------------------> */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-person" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} placeholder="Name" value={name} autoCorrect={false} 
            onChangeText={(text) => setName(text)} />
        </View>
        {/* Email -------------------------------> */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-mail" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input}  autoCapitalize="none" autoCorrect={false} 
           placeholder="Email" value={email} onChangeText={(text)=>setEmail(text)}/>
        </View>
        {/* Pasword ------------------------------------> */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-lock-closed" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input} secureTextEntry={true} autoCapitalize="none"  autoCorrect={false}
           placeholder="Password" value={password} onChangeText={(text)=>setPassword(text)}/>
        </View>

        {/* Confirm Password -----------------------------> */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-lock-closed" size={20} color="gray" style={styles.icon} />
          </View>
          <TextInput style={styles.input}  secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
           placeholder="Confrim password" value={confirmPassword} onChangeText={(text)=>setConfirmPassword(text)}/>
        </View>
        {/* Signup Button -------------------------------------> */}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignupNavigation}>
          {/* <View style={styles.buttonContent}> */}
          <Text style={styles.buttonText}>Sign Up</Text>
          <Icon name="ios-arrow-forward" size={20} color="white" style={styles.buttonIcon} />
          {/* </View> */}
        </TouchableOpacity>
          {/* already have accont ---------------------------------> */}
        <View style={{ flexDirection: "row", marginTop: 26 }}>
          <Text>Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ textDecorationLine: "underline", color: "deepskyblue" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 60,
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
  // buttonContent: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default Register;