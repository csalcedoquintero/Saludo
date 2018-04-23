import React, { Component } from 'react';
import { Text, View, StyleSheet , Platform, TextInput, Button} from 'react-native';
import { Constants } from 'expo';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      greeting:''
    };
  }
  
  onChangeText = () => {
    this.setState({
      greeting: 'Hello, '+this.state.name
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.phases}>
          Hello, type your name
        </Text>
        <TextInput style={styles.phases} placeholder='Type your name here' onChangeText={(name)=> this.setState({name: name})}/>
        <Button title='Click me' onPress={this.onChangeText}/>
        <Text style={styles.phases}>
          {this.state.greeting}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    marginTop: (Platform.OS) === 'ios'? 20:0,
  },
  phases: {
    fontSize: 25,
  }
});
