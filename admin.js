import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  onPress
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Admin= ({ navigation }) => {
  return (
    <>
   
    <View style={styles.view}>

    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
         <Text style={styles.Text} >VIEW COMPANY VACANCY</Text>
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
      
      
     
      
    </>
  );
};

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

export default Admin;