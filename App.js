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

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "stretch",  justifyContent: "space-between"}}>
        
        <ImageBackground source={require('./src/imgs/background.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "stretch",  justifyContent: "space-between"}}>
        <Text style= {styles.submitButtonText}>Mis dinosaurios</Text>
        <Button 
          title="Tiranosaurio"
          //onPress={() => this.props.navigation.push('Tiranosaurio')}
          onPress={() => this.props.navigation.navigate('Tiranosaurio')}
         />
        <Button
          title="Ankilosaurio"
          onPress={() => this.props.navigation.navigate('Ankilosaurio')}
        />
        <Button
          title="Espinosaurio"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('Espinosaurio')}
        />
        <Button
          title="Triceratops"
          //onPress={() => this.props.navigation.push('Tiranosaurio')}
          onPress={() => this.props.navigation.navigate('Triceratops')}
        />
        <Button
          title="Carcharadontosaurio"
          onPress={() => this.props.navigation.navigate('Carcharadontosaurio')}
        />
        <Button
          title="Velociraptor"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('Velociraptor')}
        />
        <Button
          title="Mutaburrasaurio"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('Mutaburrasaurio')}
        />
        <Button
          title="Carnotauro"
          //onPress={() => this.props.navigation.push('Tiranosaurio')}
          onPress={() => this.props.navigation.navigate('Carnotauro')}
        />
        <Button
          title="Estegosaurio"
          onPress={() => this.props.navigation.navigate('Estegosaurio')}
        />
        <Button
          title="Gallimimus"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('Gallimimus')}
        />
         </ImageBackground>
      </View>
    );
  }
}
