import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';

class G extends Component {
  constructor(props) {
    super(props);
    this.scale = new Animated.Value(0);
  }

  scalElem = (toValue, duration) => {
    this.scale.setValue(0);
    Animated.timing(
      this.scale,
      {
        toValue,
        duration,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  }

  render() {
    const scale = this.scale.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.5, 1.2]
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPressIn={() => this.scalElem(1, 250)}
          onPressOut={() => this.scalElem(0, 100)}
        >
          <Animated.Text style={[styles.welcome, { transform: [{ scale }] }]}>
            Welcome to React Native!
          </Animated.Text>
        </TouchableOpacity>
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

export default G;
