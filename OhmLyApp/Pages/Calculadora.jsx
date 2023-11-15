import React, {useState, useEffect} from 'react';
import Boton from '../componentes/boton';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Calculadora({navigation}) {
  const [voltaje, setVoltaje] = useState(0);
  const [resistencia, setResistencia] = useState(0);
  const [intensidad, setIntensidad] = useState(0);

  useEffect(() => {
    if (voltaje == '') {
      setVoltaje(0);
    }

    if (resistencia == '') {
      setResistencia(0);
    }

    if (intensidad == '') {
      setIntensidad(0);
    }

    console.log('voltaje', voltaje);
    console.log('resistencia', resistencia);
    console.log('intensidad', intensidad);
  }, [voltaje, resistencia, intensidad]);

  const v = voltaje;
  const r = resistencia;
  const i = intensidad;

  const calcular = () => {
    const voltajeNumber = parseFloat(v);
    const resistenciaNumber = parseFloat(r);
    const intensidadNumber = parseFloat(i);

    switch (true) {
      case voltajeNumber == 0:
        const resultadoVoltaje = resistenciaNumber * intensidadNumber;
        setVoltaje(resultadoVoltaje);
        console.log(voltaje);
        break;
      case resistenciaNumber == 0:
        const resultadoResistencia = voltajeNumber / intensidadNumber;
        setResistencia(resultadoResistencia);
        console.log(resistencia);
        break;
      case intensidadNumber == 0:
        const resultadoIntensidad = voltajeNumber / resistenciaNumber;
        setIntensidad(resultadoIntensidad);
        console.log(intensidad);
        break;
      default:
        console.log(resultadoResistencia);
        console.log('Ocurrió un error al tratar de calcular');
        break;
    }
    
  };

const clearValues = () => {
  setIntensidad(0);
  setResistencia(0);
  setVoltaje(0);
}

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[{marginTop: 40}]}>
          <Text style={[styles.black, styles.textshadow, {fontSize: 30}]}>
            Calculadora de ley de Ohm
          </Text>
        </View>
        <Text style={[{textAlign: 'center', marginTop:10}]}>!Tambien tenemos estas secciones que podrian interesarte¡</Text>
      <View style={[styles.botonContainer, {  marginBottom:10}]}>
          <Boton texto={'Circuito en serie'} navigation={navigation} ruta={'Serie'} />
          <Boton texto={'Circuito en paralelo'} navigation={navigation} ruta={'Paralelo'} />
        </View>
        <View>
          <Text style={[styles.black, styles.textshadow, {marginTop: 30}]}>
            Introduzca los valores de voltaje, corriente y resistencia, se
            necesitan al menos dos parámetros para realizar el cálculo.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              borderColor: '#000000',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              margin: 10,
            }}
            onChangeText={value => setVoltaje(value.toString())}
            value={voltaje}
            placeholder="Voltaje"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              borderColor: '#000000',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              margin: 10,
            }}
            onChangeText={value => setResistencia(value.toString())}
            value={resistencia}
            placeholder="Resistencia"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              borderColor: '#000000',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              margin: 10,
            }}
            onChangeText={value => setIntensidad(value.toString())}
            value={intensidad}
            placeholder="Intensidad"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={[styles.boton, styles.textShadowOnButtons]}
          onPress={calcular}>
          <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
            Calcular
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.boton, styles.textShadowOnButtons,{marginTop: 10, backgroundColor: '#000000'}]}  
          onPress={clearValues}>
          <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
            Limpiar Valores
          </Text>
        </TouchableOpacity>
        
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {intensidad !== 0 && (
            <Text style={[styles.black, styles.textshadow, {marginTop: 10}]}>
              Corriente: {parseFloat(intensidad).toFixed(4)}
            </Text>
          )}

          {resistencia !== 0 && (
            <Text style={[styles.black, styles.textshadow, {marginTop: 10}]}>
              Resistencia: {parseFloat(resistencia).toFixed(4)} Ohm (Ω)
            </Text>
          )}

          {voltaje !== 0 && (
            <Text style={[styles.black, styles.textshadow, {marginTop: 10}]}>
              Voltaje: {parseFloat(voltaje).toFixed(4)}
            </Text>
          )}
        </View>

        <View
          style={[
            styles.textShadowOnButtons,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <Image
            source={require('../assets/TrianguloCasero.png')}
            style={{
              width: 200,
              height: 200,
              marginTop: 20,
              marginTop: 50,
            }}></Image>
        </View>
        <View>
          <Text
            style={[
              styles.textshadow,
              {fontSize: 20, fontWeight: 'bold', color: '#000000', margin: 5},
            ]}>
            La ley de Ohm
          </Text>
        </View>
        <View>
          <Text style={[styles.textshadow, {margin: 5}]}>
            La ley de ohm establece la relación que guardan la tensión y la
            corriente que circulan por una resistencia, la formula para calcular
            cada uno de los siguientes atributos es:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
              gap: 10,
            }}>
            <Text
              style={[
                styles.textshadow,
                {color: '#FF0000', fontWeight: 'bold'},
              ]}>
              V = I * R
            </Text>
            <Text
              style={[
                styles.textshadow,
                {color: '#7E3E03', fontWeight: 'bold'},
              ]}>
              V = I * R
            </Text>
            <Text
              style={[
                styles.textshadow,
                {color: '#EBCF6C', fontWeight: 'bold'},
              ]}>
              V = I * R
            </Text>
          </View>

          <Text style={[styles.textshadow, {margin: 5}]}>
            <Text style={styles.black}>Voltaje (V) :</Text> Es la caída de la
            tensión o la diferencia de potencial que se produce en la
            resistencia, y se mide en voltios en el sistema internacional (S.I)
          </Text>
          <Text style={[styles.textshadow, {margin: 5}]}>
            <Text style={styles.black}>Resistencia (Ohmios ) :</Text> La
            Resistencia en un circuito se mide en ohmios, esta hace que regule
            cuanto voltaje entra a un circuito, cuanto mayor valor sea la
            resistencia, dejara pasar menos corriente y mientras mas pequeño sea
            el valor, dejara pasar mas corriente, esta también se puede
            representar con el símbolo : Ω
          </Text>
          <Text style={[styles.textshadow, {margin: 5}]}>
            <Text style={styles.black}>Intensidad (I) :</Text>
            Es la corriente que circula a través de la misma y se mide en
            amperios en el S.I
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  black: {
    color: '#000000',
    fontWeight: '500',
  },
  boton: {
    backgroundColor: '#E02244',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  botonTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  textshadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  textShadowOnButtons: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 4, height: 4},
    shadowRadius: 4,
    elevation: 5,
  },
  botonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
