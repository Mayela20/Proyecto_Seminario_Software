import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
       <ImageBackground source={require('./src/imgs/background.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "stretch",  justifyContent: "space-between"}}>
        <Text style= {styles.submitButtonText}>Dinosaurios</Text>
        <Button
          title="FLASH CARDS"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        </ImageBackground>
      </View>
    );
  }
}
