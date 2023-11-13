import {StyleSheet, Text, View, Image} from 'react-native';
import Boton from '../componentes/boton';
export default function Index({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>OhmLy</Text>
      <View style={{marginTop: 20}}>
        <Text
          style={[
            styles.blackBold,
            styles.textcenter,
            styles.semibold,
            {fontSize: 20},
          ]}>
          Calcula la potencia, intensidad, resistencia de tus circuitos simples
        </Text>
      </View>
      <View>
        <Text style={[{textAlign: 'center', marginTop: 60, fontSize: 15}]}>
          Presiona cualquiera de los siguientes botones para empezar a realizar
          los cálculos de los circuitos
        </Text>
      </View>
      <View>
        <Text
          style={[
            {fontSize: 15, fontWeight: 'bold', marginTop: 60},
            styles.blackBold,
          ]}>
          Este programa solo realiza calculos de circuitos simples
        </Text>
      </View>
      <View style={styles.botonContainer}>
        <Boton texto={'En serie'} navigation={navigation} ruta={'Serie'} />
        <Boton texto={'Paralelo'} navigation={navigation} ruta={'Paralelo'} />
        <Boton texto={'Mixto'} navigation={navigation} ruta={'Mixto'} />
      </View>
      <Text style={[{marginTop:10}]}> Este programa calcula los parametros de un circuito</Text>

      <View style={[{marginTop: 10}]}>

        <Boton texto={'Calculadora'} navigation={navigation} ruta={'Calculadora'} />
      </View>
      <Image
        source={require('../assets/Ohm.png')}
        style={{width: 200, height: 200, marginTop: 20, marginTop: 50}}
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
});
