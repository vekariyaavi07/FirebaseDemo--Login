/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import firebase from '@react-native-firebase/app';

import 'firebase/firestore';

import firestore from '@react-native-firebase/firestore';
import SignUp from './SignUp';

const Login = ({navigation}) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBO1_i7tPtnECO2Kt6anzFX3L9wOX5M8Ck',
    authDomain: 'fir-demo-d0738.firebaseapp.com',
    databaseURL: 'https://fir-demo-d0738-default-rtdb.firebaseio.com',
    projectId: 'fir-demo-d0738',
    storageBucket: 'fir-demo-d0738.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: '1:227783064907:android:9946c87fa59554c5a63cce ',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const saveData = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        password: password,
      })
      .then(() => {
        console.log('User added!');
      })
      .catch(err => {
        console.log('****err1111', err);
      });
  };
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 80,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Login
      </Text>
      <View>
        <TextInput
          style={{
            width: '90%',
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 20,
          }}
          placeholder="Enter Name"
          value={name}
          onChangeText={txt => setName(txt)}
        />
        <TextInput
          style={{
            width: '90%',
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 20,
          }}
          placeholder="Enter Password"
          value={password}
          onChangeText={txt => setPassword(txt)}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '60%',
            height: 50,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',

            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => saveData()}>
          <Text style={{fontSize: 20, color: '#000'}}>Login</Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}
          onPress={() => navigation.navigate(SignUp)}>
          Create a New Account
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
