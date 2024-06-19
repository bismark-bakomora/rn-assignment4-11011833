import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios'?  'padding' : 'height'}>

    <ScrollView style={styles.container}>
      <Text style={styles.logoText}>Jobizz</Text>
      <Text style={styles.title}>Welcome Back👋</Text>
      <Text style={styles.subtitle}>Let's log in, Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orContinueWith}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/appleLogo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.noAccount}>
        Haven't an account? <Text style={styles.registerText}>Register</Text>
      </Text>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 18,
    backgroundColor: '#f5f5f5',
  },

  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#356899',
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#0D0D26',
  },

  subtitle: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 25,
    marginTop: 10,
  },

  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#356899',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  noAccount: {
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'gray',
    marginTop: 60,
  },

  registerText: {
    color: '#356899',
  },

  orContinueWith: {
    fontSize: 12,
    color: 'gray',
    marginHorizontal: 10,
  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },

  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;
