import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Linking
} from 'react-native';

class A extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount () {
    console.log('A');

    Linking.getInitialURL().then(url => {
      if (url) {
        console.log('Initial url is:', url);
      }
    }).catch(err => console.log('error is:', err));

    Linking.addEventListener('url', this._handleOpenURL);

    // this.spin();
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL(event) {
    console.log(event.url);
  }

  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text style={{ fontSize: 26 }}>Open Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
          <Text style={{ fontSize: 26 }}>Close Drawer</Text>
        </TouchableOpacity>
        {/* <Animated.Text style={[styles.welcome, { transform: [{ rotate: spin }] }]}>
          Welcome to React Native!
        </Animated.Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default A;
