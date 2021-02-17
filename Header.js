import React, {Component} from "react";
import {Text, View, TextInput} from "react-native"

class Header extends Component{

    constructor(props){
      super(props);
      this.state ={
        umur: this.props.usia,
        inputText: ""
      }
    }

    handleInput = (event) => {
      this.setState({inputText: event});
    }

    render() {
      return (
        <View>
          <Text>{this.state.umur}</Text>
        <TextInput onChangeText={this.handleInput} placeholder="masukkan teks"
        value={this.state.inputText}/>
        <Text>
          Ini adalah Text : {this.state.inputText}
        </Text>
        </View>
      )
    }
  }

  export default Header;