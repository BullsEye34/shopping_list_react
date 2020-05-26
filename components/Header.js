import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>{title}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    height: 65,
    padding: 15,
    backgroundColor: 'darkslateblue',
    alignItems:'center',
  },
  text:{
      color: '#fff',
      fontSize:23,

  }
});

export default Header;
