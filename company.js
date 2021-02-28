import React, { useState} from 'react';
import dataBase from '@react-native-firebase/database'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Text,
    StatusBar,
    TouchableOpacity,
    onPress
  } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, } from 'native-base';
const Company=(props)=> {
    const {Name,setName}=useState("")
    const {Number,setNum}=useState("")
    const {Address,setadd}=useState("")
    const {vacancy,setqua}=useState("")
    const saveData=()=>{
        let user={
            Name,
            Number,
            Address,
            vacancy
        }
        dataBase.ref('/').child('user').push(user)
    }
    
    return (
      <Container>
        <View>
        <Text>
          Enter Your Company Name: 
        </Text>
        <TextInput value={Name}  onChangeText={(text)=>{setName(text)}}
         style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <Text>
          Enter Mobile Number:
        </Text>
        <TextInput value={Number}  onChangeText={(text)=>{setNum(text)}}
        style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <Text>
          Enter Your Address: 
        </Text>
        <TextInput value={Address}  onChangeText={(text)=>{setadd(text)}}
         style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <Text>
          Enter Your VACANCY:
        </Text>
        <TextInput value={vacancy}  onChangeText={(text)=>{setqua(text)}}
        style={{borderWidth:2, borderColor:'black', width:"80%"}}/>
        <View style={styles.view}>
     <TouchableOpacity
       style={styles.button}
       onPress={saveData}
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
       <Text style={styles.Text} >VIEW STUDENT LIST</Text>
     </TouchableOpacity></View>
     </View>
      </Container>
     


    );
}
const styles = StyleSheet.create({
    Text:{
        fontSize:42,
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
export default Company;