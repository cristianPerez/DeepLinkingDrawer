import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class DrawerPanel extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => alert('Hi')}>
          <Text style={{ fontSize: 22 }}>Hi~</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
          <Text style={{ fontSize: 26 }}>Close Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DrawerPanel;
