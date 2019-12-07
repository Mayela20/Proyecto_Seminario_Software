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

class Espinosaurio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Espinosaurio</Text>
        <Image
          style={{width: '95%', height: '35%'}}
          source={require('./src/imgs/espinosaurio.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
          Spinosaurus (gr. «lagarto de espina») es un género representado por dos especies de dinosaurios 
          terópodos espinosáuridos, que vivieron en lo que actualmente es el norte de África desde el Albiense Inferior 
          hasta el Cenomaniense Inferior del periodo Cretácico, hace aproximadamente 112 a 93,5 millones de años. 
          Este género se conoció inicialmente por los restos fósiles descubiertos en Egipto en la década de 1910 
          y descritos por el paleontólogo alemán Ernst Stromer.
          Los restos originales fueron destruidos durante los bombardeos de la Segunda Guerra Mundial, 
          pero se ha recuperado material adicional en años recientes. 
          No existe claridad de si se trata de una o dos especies representadas por los fósiles reportados en la literatura científica. 
          La especie mejor conocida es S. aegyptiacus descubierta en Egipto;
          sin embargo, una posible segunda especie S. maroccanus se descubrió en Marruecos. 
          También se han encontrado restos en Argelia, Túnez y posiblemente de Níger y Libia.
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class Triceratops extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Triceratops</Text>
        <Image
          style={{width: '95%', height: '30%'}}
          source={require('./src/imgs/triceratops.jpg')}
        />

        <Text style={{textAlign: "center"}}>
          Triceratops (del griego tri-/τρι- ="tres", kéras/κέρας ="cuerno", y -ōps/-ωψ ="cara";
          "cara de tres cuernos'"), o el tricerátops, es un género de dinosaurios ceratopsianos ceratópsidos, 
          que vivieron a finales del período Cretácico, hace aproximadamente 68 y 66 millones de años, en el Maastrichtiense, 
          en lo que hoy es Norteamérica. Es uno de los últimos géneros en aparecer antes del gran evento de extinción masiva del 
          Cretácico-Terciario. Poseía una gran gola ósea (plataforma craneal posterior) y tres cuernos, 
          un cuerpo grande sobre cuatro fornidas patas, y varias similitudes con respecto al moderno rinoceronte. 
          Triceratops es uno de los más reconocidos de todos los dinosaurios. 
          Aunque compartiera el territorio con el temible Tyrannosaurus y fuera cazado por él,
          no está claro si los dos lucharon de la manera representada a menudo en exhibiciones de museo o en imágenes populares. 
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class Carcharadontosaurio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Charcaradontosaurio</Text>
        <Image
          style={{width: '95%', height: '50%'}}
          source={require('./src/imgs/carcharodontosaurio.jpg')}
        />

        <Text style={{textAlign: "center"}}>
          Carcharodontosaurus (lat. "Reptil diente de tiburón") es un género de dinosaurios terópodos carcarodontosáuridos, 
          que vivieron a mediados del período Cretácico, hace aproximadamente entre 112 y 93,5 millones de años, 
          en el Cenomaniense, en lo que hoy es África, compartiendo sus territorios con el Spinosaurus.
          El nombre Carcharodontosaurus proviene del antiguo griego καρχαρο karcharo que significa “afilado” y οδοντο odonto “diente”, 
          que a su vez es el nombre de un género de tiburones Carcharodon, y σαυρος sauros, “lagarto”.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class Velociraptor extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Velociraptor</Text>
        <Image
          style={{width: '90%', height: '30%'}}
          source={require('./src/imgs/velociraptor.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
          Velociraptor (del latín, 'ladrón veloz'), o el velociraptor, 
          es un género de dinosaurios terópodos dromeosáuridos que vivieron durante el Campaniaense, 
          hacia finales del período Cretácico, hace unos 75 a 71 millones de años, en lo que es hoy Asia. 
          Tradicionalmente sólo se ha reconocido a una especie, V. mongoliensis, cuyos fósiles se han hallado en Asia Central, 
          en Mongolia, pero una segunda especie, V. osmolskae, fue nombrada en 2008 a partir de material craneal procedente de Mongolia 
          Interior, en China.

          Aunque más pequeño que otros dromeosáuridos como el deinonico y el aquilobator, 
          Velociraptor tenía muchos rasgos anatómicos similares a ellos. 
          Fue un carnívoro bípedo, con una cola larga y rígida, y tres garras, una alargada y curva en cada pata, 
          la cual usaba para matar a sus presas. A diferencia de otros dromeosáuridos Velociraptor poseía un cráneo bajo y alargado, 
          y un hocico chato, dirigido hacia arriba. Poseía patas traseras de gran longitud, 
          lo que expresa (al igual que el nombre) su aparente gran velocidad. 
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class Mutaburrasaurio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Mutaburrasaurio</Text>
        <Image
          style={{width: '95%', height: '30%'}}
          source={require('./src/imgs/muttaburrasaurio.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
          Muttaburrasaurus («reptil de Muttaburra», localidad australiana en la que se encontraron restos suyos) 
          es un género representado por una única especie de dinosaurio ornitópodo rabdodóntido, 
          que vivió a mediados del período Cretácico, hace aproximadamente 112 a 98,6 millones de años, 
          en el Albiense y Cenomaniense, en lo que hoy es Australia. Después de Minmi, es el dinosaurio más completo de Australia. 
          Moldes de esqueletos de Muttaburrasaurus son expuestos en numerosos museos, incluyendo el Queensland Museum, 
          Flinders Discovery Centre y National Dinosaur Museum en Australia. Gracias al uso de técnicas de efectos especiales, 
          reconstituciones hipotéticas de Muttaburrasaurus vivos han podido ser vistas en series documentales de televisión, 
          como por ejemplo en el quinto y penúltimo episodio de la serie de la BBC Walking with Dinosaurs, de 1999, 
          o en At The Ends of the Earth, que es el quinto y último episodio de la serie documental When Dinosaurs Ruled, 
          también de 1999 pero de otro canal, el Science Channel. 
          Muttaburrasaurus es también uno de los dinosaurios visibles en el largometraje animado para niños 
          En busca del valle encantado 3: La fuente de la vida (1995).
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class Carnotauro extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Carnotauro</Text>
        <Image
          style={{width: '90%', height: '40%'}}
          source={require('./src/imgs/carnotauro.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
           Carnotaurus (lat. "toro carnívoro")[1] es un género representado por una única especie, Carnotauro sastrei, 
           pertenece a los dinosaurios terópodos abelisáuridos ceratosaurios, vivió a finales del período Cretácico, 
           hace aproximadamente entre 72 a 68 millones de años, entre el Campaniense y el Maastrichtiense, 
           en lo que hoy es Sudamérica. Lo más notable de este dinosaurio son sus dos pequeños cuernos sobre los ojos 
           en su pequeña cabeza, siendo el primer carnívoro que mostrara cuernos bien formados y definidos. 
           También se hallaron impresiones de la piel que presentaban pequeños osteodermos (escudos óseos). 
           Carnotaurus es un miembro avanzado de la familia Abelisauridae, 
           un grupo de grandes terópodos que ocuparon el nicho de gran depredador en las masas de tierras 
           que conformaron Gondwana durante finales del Cretácico, ocupando el lugar de los tiranosáuridos 
           luego de la desaparición de los carcarodontosáuridos y neovenatorido.
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class Estegosaurio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Estegosaurio</Text>
        <Image
          style={{width: '100%', height: '40%'}}
          source={require('./src/imgs/estegosaurio.jpg')}
        />

        <Text style={{textAlign: "center"}}>
          Stegosaurus (gr. que significa "lagarto con tejado" o "lagarto cubierto" en referencia a sus placas óseas), 
          o el estegosaurio, es un género de dinosaurios tireóforos estegosáuridos. 
          Vivieron a finales del período Jurásico, hace aproximadamente 156 y 144 millones de años, 
          en el Kimmeridgiense y el Titoniense, en lo que hoy son América del Norte. 
          En 2006, se descubrió un espécimen de Stegosaurus en Portugal, 
          lo que indica que este animal también estaba presente en Europa. 
          Debido a sus distintivas espinas de la cola y placas, Stegosaurus es uno de los más reconocidos dinosaurios. 
          Al menos tres especies han sido identificadas en la porción superior de la Formación Morrison, 
          del oeste de Estados Unidos, y son conocidas por lo menos por 80 individuos.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class Gallimimus extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./src/imgs/background2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Gallimimus</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./src/imgs/gallimimus.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
          Gallimimus (en latín, «imitador de la gallina», en el sentido de «similar a una gallina») 
          es un género representado por una única especie de dinosaurio terópodo ornitomímido, 
          que vivió a finales del período Cretácico, hace aproximadamente 70 millones de años entre el Campaniense y el Maastrichtiense,
          en lo que hoy es Asia. Fue hallado en la Formación Nemegt, en Mongolia. 
          Debido a su constitución ligera y sus largas patas traseras, este dinosaurio estaba adaptado para la carrera. 
          Sin duda fue esa su gran baza para escapar de los depredadores. 
          Su aspecto recuerda al de un avestruz dado su largo cuello y su pico sin dientes; 
          no obstante, no hay constancia de que tuviera alas o plumas. 
          Su larga cola le servía para mantener el equilibrio al avanzar. 
          Parte de su fama se la debe a su aparición en la saga de novelas de Michael Crichton El Mundo Perdido, 
          y de la primera entrega de la saga de películas Parque Jurásico dirigida por Steven Spielberg.
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

