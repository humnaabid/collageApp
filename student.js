import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    onPress
  } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, } from 'native-base';
const STUDENT=(props)=> {
  
    return (
      <Container>
        <View>
        <Text>
          Enter Your Full Name: 
        </Text>
        <TextInput style={{borderWidth:2, borderColor:'black', width:"80%"}} />
        <Text>
          Enter Mobile Number:
        </Text>
        <TextInput style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <Text>
          Enter Your Address: 
        </Text>
        <TextInput style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <Text>
          Enter Your Qualification:
        </Text>
        <TextInput style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <Text>
          Enter Your GPA:
        </Text>
        <TextInput style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <View style={styles.view}>
     <TouchableOpacity
       style={styles.button}
       onPress={onPress}
     >
       <Text style={styles.Text} >submit</Text>
     </TouchableOpacity></View>
      
     <View style={styles.view}>
     <TouchableOpacity
       style={styles.button}
       onPress={() =>
           navigation.navigate('Profile', { name: 'Jane' })
         }
     >
       <Text style={styles.Text} >VIEW COMPANY VACANCY LIST LIST</Text>
     </TouchableOpacity></View>


        </View>
      </Container>
    );
}
const styles = StyleSheet.create({
    Text:{
        fontSize:22,
        color:'black',
        marginTop:10,
        backgroundColor: 'gray',
        textAlign:'center',
        justifyContent:'center'
    
    },
    view:{
        flex:3,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign:'center',
        justifyContent:'center'
        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
    });

export default STUDENT;