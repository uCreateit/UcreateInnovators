/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, TextInput,Button, Alert, TouchableHighlight,TouchableOpacity,
  TouchableNativeFeedback } from 'react-native';
import { tsConstructorType } from '@babel/types';
import { createStackNavigator , createAppContainer, Header} from 'react-navigation';
import ListScreen from './ListScreen';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class BlinkApp extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' };
  }

  _onPressButton(){
    Alert.alert("You have press the button")
  }

  static navigationOptions={
    header:null
  };

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
     
      <View style={styles.container}>
        <ImageBackground source={require('./src/assets/global_bg.png')} style={styles.container}>
         
            <Image source={require('./src/assets/ic_im_logo.png')} style={{width:175,height:155, marginTop:30}}></Image>
        <View style={{width:320,height:180, backgroundColor: '#fff', borderRadius:3, marginTop:20}}>
          <TextInput style={styles.inputStyle}
            placeholder={'Email'}
            underlineColorAndroid='#06878A'
            onChangeText={(text) => this.setState({ text })}></TextInput>

            <TextInput style={styles.inputStyle}
            placeholder={"Password"}
            underlineColorAndroid='#06878A'
            onChangeText={(text)=>this.setState({text})}></TextInput>

            <Text style={{color:"#06878A", fontWeight:"bold",margin: 10,fontSize:11}}>Forgot your password?</Text>

          {/* <Text style={{ height: 40, padding: 10, fontSize: 40 }}>{this.state.text} </Text> */}
          
          {/* <View style={styles.button}>
            <Button onPress={this._onPressButton} style={styles.button}
            title = "LOG IN"/>
           
          </View> */}

          
        </View>
        

        {/* <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''} style={styles.buttons}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </TouchableNativeFeedback> */}
{/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('List')}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity> */}
<TouchableNativeFeedback
            onPress={()=>{this.props.navigation.navigate('List')}}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''} style={styles.buttons}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </TouchableNativeFeedback>

        <Text onPress={()=>{this.props.navigation.navigate('register')} }
        style={{color:"#fff", textShadowColor:'#05928E', shadowRadius: 10 ,fontSize:16,fontWeight:'bold', marginTop: 20}}>CREATE AN ACCOUNT</Text>

        </ImageBackground>

      </View>
     
    );
  }
}



// const AppNavigator = createStackNavigator(
//   {
//     Home: BlinkApp,
//     List: ListScreen,
//     search: SearchBar,
//   },
//   {
//   initialRoute : "Home"
//   }
// );

// export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
 
  buttons:{
    width:260,
    height:30

  },
  button: {
   // marginBottom: 30,
   // marginTop: 20,
    width: 320,
    height:45,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#06878A',
    borderRadius:3,
  },
  buttonText: {
    padding: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  inputStyle:{
    width:260,
    height:40,
    margin: 10,
    //backgroundColor: 'white',
   
    padding: 5,
     borderRadius: 5 
  }
});
