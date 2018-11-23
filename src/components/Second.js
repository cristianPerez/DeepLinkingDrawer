import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Second extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={{ fontSize: 22 }}>Second screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Second;
