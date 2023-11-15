import React, {useState} from 'react';
import Boton from '../componentes/boton';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

export default function Paralelo({navigation}) {
  const [resistances, setResistances] = useState([{key: 0, value: ''}]);
  const [totalResistance, setTotalResistance] = useState(0);
  const [voltaje, setVoltaje] = useState('');
  const [intensidad, setIntensidad] = useState(0);
  const [voltajes, setVoltajes] = useState([{key: 0, value: ''}]);
  const [totalVoltaje, setTotalVoltaje] = useState(0);

  const addVoltajes = () => {
    if (voltajes.length < 10) {
      const newVoltaje = {key: voltajes.length, value: ''};
      setVoltajes([...voltajes, newVoltaje]);
    } else {
      alert('Máximo de 10 voltajes alcanzado');
    }
  };

  const calculateTotalVoltaje = () => {
    const sum = voltajes.reduce((total, voltaje) => {
      const voltajeValue = parseFloat(voltaje.value) || 0;
      return total + voltajeValue;
    }, 0);
    setTotalVoltaje(sum);
  };

  const addResistance = () => {
    if (resistances.length < 10) {
      const newResistance = {key: resistances.length, value: ''};
      setResistances([...resistances, newResistance]);
    } else {
      alert('Máximo de 10 resistencias alcanzado');
    }
  };

  const clearVoltaje = () => {
    if (voltajes.length > 1) {
      const updatedVoltajes = voltajes.slice(0, -1);
      setVoltajes(updatedVoltajes);
    } else {
      alert('Debe haber al menos una resistencia.');
    }
  };

  const calculateTotalResistance = () => {
    const sumInverse = resistances.reduce((total, resistance) => {
      const resistanceValue = parseFloat(resistance.value) || 0;
      const inverse = resistanceValue !== 0 ? 1 / resistanceValue : 0;
      return total + inverse;
    }, 0);

    const totalResistance = sumInverse !== 0 ? 1 / sumInverse : 0;

    setTotalResistance(totalResistance);
  };

  const clearValues = () => {
    if (resistances.length > 1) {
      const updatedResistances = resistances.slice(0, -1);
      setResistances(updatedResistances);
    } else {
      alert('Debe haber al menos una resistencia.');
    }
    setTotalResistance(0);
  };

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={[{marginTop: 40}]}>
          <Text
            style={[
              styles.black,
              styles.textshadow,
              {fontSize: 30, textAlign: 'center'},
            ]}>
            Circuito en paralelo
          </Text>
        </View>
        <Text style={[{textAlign: 'center', marginTop: 10}]}>
          !Tambien tenemos estas secciones que podrian interesarte¡
        </Text>
        <View style={[styles.botonContainer, {marginBottom: 10}]}>
          <Boton
            texto={'Circuito en serie'}
            navigation={navigation}
            ruta={'Serie'}
          />
          <Boton
            texto={'Calculadora Ley de Ohm'}
            navigation={navigation}
            ruta={'Calculadora'}
          />
        </View>
        <Text style={[{marginTop: 10, textAlign: 'center'}]}>
          En este apartado te enseñaremos como calcular La intensidad ,
          Resistencia Total, Voltaje de un circuito en paralelo
        </Text>

        {/* Resistencia */}
        <View>
          <Text
            style={[
              {
                margin: 5,
                textAlign: 'start',
                color: '#000000',
                fontWeight: 'bold',
                marginTop: 20,
              },
            ]}>
            1-. Calcular el voltaje
          </Text>
          <View style={[styles.borderDiv, {padding: 20}]}>
            <View style={[{marginTop: 10}]}>
              <Text style={{textAlign: 'center', margin: 5}}>Formula</Text>
              <Text style={[{textAlign: 'center'}]}>
                Resistencia total/equivalente = I1 + I2 + I3 + ... + In{' '}
              </Text>
            </View>
            <View></View>
            <View>
              <Text style={[{textAlign: 'center'}]}>
                Es muy importante saber que en un circuito en paralelo, el
                voltaje es el mismo en todos los componentes, asi que para
                calcular el voltaje nos bastaría con usar la formula de voltaje
                la cual es :
              </Text>
              <Text
                style={[
                  {
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#000000',
                    margin: 10,
                  },
                ]}>
                V = I * R
              </Text>
              <Text style={[{textAlign: 'center', margin: 10}]}>
                Para realiazar este calculo puedes ir a nuestra calculadora de
                ley de ohm
              </Text>
              <Boton
                texto={'Calculadora'}
                navigation={navigation}
                ruta={'Calculadora'}
              />
            </View>
          </View>
        </View>

        {/* cuadro 2 */}
        <View>
          <Text
            style={[
              {
                margin: 5,
                textAlign: 'start',
                color: '#000000',
                fontWeight: 'bold',
                marginTop: 20,
              },
            ]}>
            2-. Calcular la intensidad
          </Text>
          <View style={[styles.borderDiv, {padding: 20}]}>
            <View style={[{marginTop: 10}]}>
              <Text style={{textAlign: 'center', margin: 5}}>Formula</Text>
              <Text style={[{textAlign: 'center'}]}>
                Resistencia total/equivalente = I1 + I2 + I3 + ... + In
              </Text>
            </View>
            <View></View>
            <View>
              <Text style={[{textAlign: 'center', margin: 10}]}>
                Es muy importante tener en cuenta que en cuenta que a diferencia
                de los circuitos en serie, en los circuitos paralelos la
                intensidad si cambia, asi que para cada uno de los componentes
                será diferente, para calcular la intensidad , nos bastaría
                aplicar la formula de la ley de ohm para la intensidad la cual
                es :
              </Text>
              <Text
                style={[
                  {
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#000000',
                    margin: 10,
                  },
                ]}>
                I = V/R
              </Text>
              <Text style={[{textAlign: 'center', margin: 10}]}>
                Para realiazar este calculo puedes ir a nuestra calculadora de
                ley de ohm
              </Text>
              <Boton
                texto={'Calculadora'}
                navigation={navigation}
                ruta={'Calculadora'}
              />
            </View>
          </View>
        </View>

        {/* Voltaje */}
        <View>
          <Text
            style={[
              {
                textAlign: 'center',
                color: '#000000',
                fontWeight: 'bold',
                marginTop: 20,
              },
            ]}>
            3-. Calcular la intensidad total
          </Text>
          <View style={[styles.borderDiv, {padding: 20}]}>
            <View style={[{marginTop: 10}]}>
              <Text style={{textAlign: 'center'}}>Formula</Text>
              <Text style={[{textAlign: 'center', margin: 5}]}>
                Resistencia total/equivalente = I1 + I2 + I3 + ... + In
              </Text>
            </View>
            <View>
              <View style={{marginTop: 10, padding: 10}}>
                {voltajes.map(voltaje => (
                  <View key={voltaje.key} style={styles.resistanceContainer}>
                    <View style={styles.omegaContainer}>
                      <Text style={styles.omegaText}>V {voltaje.key + 1}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Ingrese su intensidad"
                        keyboardType="numeric"
                        onChangeText={text => {
                          const updatedVoltajes = [...voltajes];
                          updatedVoltajes[voltaje.key].value = text;
                          setVoltajes(updatedVoltajes);
                        }}
                      />
                    </View>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                style={[styles.boton, styles.textShadowOnButtons, {margin: 10}]}
                onPress={addVoltajes}>
                <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                  Añadir intensidad
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.boton, styles.textShadowOnButtons, {margin: 10}]}
                onPress={clearVoltaje}>
                <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                  Eliminar intensidad
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.boton, styles.textShadowOnButtons, {margin: 10}]}
                onPress={calculateTotalVoltaje}>
                <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                  Calcular
                </Text>
              </TouchableOpacity>
              <Text style={[{textAlign: 'center'}]}>
                Para calcular la Intensidad total de un circuito en paralelo
                tenemos sumar todas las intensidades del circuito
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Intensidad Total: {totalVoltaje.toFixed(2)} A
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[
              {
                textAlign: 'center',
                color: '#000000',
                fontWeight: 'bold',
                marginTop: 20,
                margin: 5,
              },
            ]}>
            4-. Calcular la resistencia
          </Text>
          <View style={[styles.borderDiv, {padding: 20}]}>
            <View style={[{marginTop: 10}]}>
              <Text style={{textAlign: 'center'}}>Formula</Text>
              <Text style={[{textAlign: 'center', fontSize: 12}]}>
                Resistencia total = 1 / ( (1/R1) + (1/R2) +(1/R3) + ... +
                (1/Rn))
              </Text>
            </View>
            <View>
              <View style={{marginTop: 10, padding: 10}}>
                {resistances.map(resistance => (
                  <View key={resistance.key} style={styles.resistanceContainer}>
                    <View style={styles.omegaContainer}>
                      <Text style={styles.omegaText}>
                        Ω {resistance.key + 1}
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Ingrese su resistencia"
                        keyboardType='numeric'

                        onChangeText={text => {
                          const updatedResistances = [...resistances];
                          updatedResistances[resistance.key].value = text;
                          setResistances(updatedResistances);
                        }}
                      />
                    </View>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                style={[styles.boton, styles.textShadowOnButtons, {margin: 10}]}
                onPress={addResistance}>
                <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                  Añadir resistencia
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.boton, styles.textShadowOnButtons, {margin: 10}]}
                onPress={clearValues}>
                <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                  Eliminar Resistencia
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.boton, styles.textShadowOnButtons, {margin: 10}]}
                onPress={calculateTotalResistance}>
                <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                  Calcular
                </Text>
              </TouchableOpacity>
              <Text style={[{textAlign: 'center'}]}>
                Para calcular las resistencia total de un circuito en serie
                tenemos sumar todas las resistencias del circuito
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Resistencia Total: {totalResistance.toFixed(2)} Ω
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[{margin: 10}]}>
            5-. Calcular la intensidad total del circuito en paralelo
          </Text>
          <Text style={[{textAlign: 'center', margin: 10}]}>
            Para comprobar que hemos realizo correctamente estos pasos, debemos
            realizar una operación simple , la cual seria:
          </Text>
          <Text style={[{textAlign: 'center', margin: 10, fontWeight:'bold',color:'#000000' }]}>
            R total * I total
          </Text>

          <Text style={[{textAlign: 'center', margin: 10}]}>
            Al realizar esta operación, según la ley de ohm estaríamos
            calculando el voltaje. Como ya sabemos en un circuito en paralelo el
            voltaje no cambia, este resultado debería ser el mismo que el
            voltaje inicial que obtuvimos en el circuito
          </Text>
          <Text style={[{textAlign: 'center', margin: 10}]} t>
            Si necesita realizar cálculos mas en especifico, por favor acudir al
            siguiente apartado
          </Text>
          <Boton
            texto={'Calculadora'}
            navigation={navigation}
            ruta={'Calculadora'}
          />
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
  resistanceContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  omegaContainer: {
    backgroundColor: '#E02244',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  omegaText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#FCFCFC',
  },
  input: {
    marginLeft: 10,
    padding: 5,
    fontSize: 16,
  },
  borderDiv: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
  },
});
