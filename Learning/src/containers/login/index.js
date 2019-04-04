import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { backgroundImage, logoWhite } from "../../assets/images/images";
import CustomText from "../../components/Text/CustomText";
import styles from "../../assets/Styles/styles";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      header: "login"
    };
  }

  moveToAuthenticate() {
    this.setState({ header: "123" });
    this.props.navigation.navigate("Authenticate", {
      header: this.state.header
    });
  }

  async componentDidMount() {
    const response = await AsyncStorage.getItem('user')
    if(response != null) {
      this.props.navigation.navigate('FriendList', {'response':JSON.parse(response)})
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.innerContent}>
          <Image source={logoWhite} style={styles.innerLogo} />
          <TouchableOpacity
            style={styles.buttonBackground1}
            onPress={() =>
              this.props.navigation.navigate("Home", { val1: "1" })
            }
          >
            <Text style={styles.button1}>CREATE AN ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBackground2}
            onPress={() => {
              this.moveToAuthenticate();
            }}
          >
            <Text style={styles.button2}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
