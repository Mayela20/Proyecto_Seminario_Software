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


class Tiranosaurio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Tiranosaurio</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./src/imgs/tiranosaurio.jpg')}
        />
        <Text style={{textAlign: "center"}}>
            Tyrannosaurus rex (del griego latinizado tyrannus 'tirano' y saurus 'lagarto', y el latín rex, 'rey'),
            o el tiranosaurio, es la única especie de Tyrannosaurus, un género monotípico 
            de dinosaurio terópodo tiranosáurido. Vivió a finales del período Cretácico, 
            hace aproximadamente entre 68 y 66 millones de años, en el Maastrichtiense, 
            en lo que es hoy Norteamérica occidental, con una distribución mucho más amplia que otros tiranosáuridos. 
            Comúnmente abreviado como T. rex, es una figura común en la cultura popular. 
            Fue uno de los últimos dinosaurios no avianos que existieron antes de la extinción masiva del Cretácico-Terciario.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class Ankilosaurio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Anquilosaurio</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./src/imgs/ankylosaurios.png')}
        />

        <Text style={{textAlign: "center"}}>
          Los anquilosaurios (Ankylosauria) son un infraorden de dinosaurios ornitisquios tireóforos, 
          que vivieron desde el Jurásico inferior hasta el Cretácico superior 
          (hace aproximadamente 208 y 65 millones de años, desde el Hetangiano hasta el Maastrichtiense), 
          en lo que hoy es América, Europa, Asia, Australia y la Antártida.

          Los anquilosaurianos eran herbívoros cuadrúpedos, 
          con el cuerpo cubierto por una sólida armadura de placas óseas y, en algunos casos, espinas.

          Los individuos del género más conocido y que da nombre al suborden, 
          los anquilosaurios, medían entre 6 y 9 m de largo. 
          Su poderosa cola estaba formada por dos huesos que se extendían a cada lado de los huesos de la cola.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}
