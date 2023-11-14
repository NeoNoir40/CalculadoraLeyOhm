import {StyleSheet, Text, View, Image} from 'react-native';
import Boton from '../componentes/boton';
export default function Index({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, styles.textshadow]}>OhmLyApp</Text>
      <View style={{marginTop: 20}}>
        <Text
          style={[
            styles.textshadow,
            styles.blackBold,
            styles.textcenter,
            styles.semibold,
            {fontSize: 20},
          ]}>
          Calcula la tensión, intensidad, resistencia de tus circuitos simples
        </Text>
      </View>
      <View>
        <Text
          style={[
            styles.textshadow,
            {textAlign: 'center', marginTop: 60, fontSize: 15},
          ]}>
          Presiona alguno de los botones para empezar a realizar los cálculos de
          los circuitos
        </Text>
      </View>

      <View>
        <View style={[{marginTop: 30}]}></View>
      </View>
      <View style={styles.botonContainer}>
        <Boton texto={'En serie'} navigation={navigation} ruta={'Serie'} />
        <Boton texto={'Paralelo'} navigation={navigation} ruta={'Paralelo'} />
        <Boton
          texto={'Calculadora'}
          navigation={navigation}
          ruta={'Calculadora'}
        />
      </View>
      <Text style={[styles.textshadow, {marginTop: 10}]}>
        Este programa calcula los parametros de un circuito
      </Text>

      <Image
        source={require('../assets/Ohm.png')}
        style={[
          styles.textshadow,
          {width: 200, height: 200, marginTop: 20, marginTop: 50},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  botonContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
  },
  titulo: {
    marginTop: 40,
    fontSize: 45,
    color: '#E02244',
    fontWeight: 'bold',
  },
  blackBold: {
    color: '#000000',
  },
  textcenter: {
    textAlign: 'center',
  },
  semibold: {
    fontWeight: '500',
  },
  textshadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  textShadowOnButtons: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 4, height: 4},
    shadowRadius: 4,
    elevation: 5,
  },
});
