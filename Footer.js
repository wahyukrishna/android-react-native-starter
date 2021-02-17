import React from "react";
import { Text, View } from 'react-native';

const Footer = (props) => {
    var niomic = "@Niomic";
    return (
      <View>
        <Text>
          Ini adalah Footer Niomic
        </Text>
        <Text>
          {niomic} {props.tahun}
        </Text>
      </View>
    )
  }

export default Footer;