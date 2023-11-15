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

export default function Serie({navigation}) {
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
      const updatedVoltajes = voltajes.slice(0, -1); // Elimina la última resistencia
      setVoltajes(updatedVoltajes);
    } else {
      alert('Debe haber al menos una resistencia.');
    }
  };

  const calcularIntensidad = () => {
    const totalResistanceNumber = parseFloat(totalResistance);
    const voltajeNumber = parseFloat(voltaje) || 0;

    if (totalResistanceNumber !== 0) {
      const resultadoIntensidad = voltajeNumber / totalResistanceNumber;
      setIntensidad(resultadoIntensidad);
    } else {
    }
  };

  const calculateTotalResistance = () => {
    const sum = resistances.reduce((total, resistance) => {
      const resistanceValue = parseFloat(resistance.value) || 0;
      return total + resistanceValue;
    }, 0);
    setTotalResistance(sum);
  };

  const clearValues = () => {
    if (resistances.length > 1) {
      const updatedResistances = resistances.slice(0, -1); // Elimina la última resistencia
      setResistances(updatedResistances);
    } else {
      alert('Debe haber al menos una resistencia.');
    }
    setTotalResistance(0);
  };

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={[{marginTop: 10}]}>
          <Text
            style={[
              styles.black,
              styles.textshadow,
              {fontSize: 30, textAlign: 'center'},
            ]}>
            Circuito en serie
          </Text>
        </View>
        <Text style={[{textAlign: 'center', marginTop: 10}]}>
          !Tambien tenemos estas secciones que podrian interesarte¡
        </Text>
        <View style={[styles.botonContainer, {marginBottom: 10}]}>
          <Boton
            texto={'Circuito en paralelo'}
            navigation={navigation}
            ruta={'Paralelo'}
          />
          <Boton
            texto={'Calculadora Ley de Ohm'}
            navigation={navigation}
            ruta={'Calculadora'}
          />
        </View>

        <Text style={[{marginTop: 10, textAlign: 'center'}]}>
          En este apartado te enseñaremos cómo calcular la intensidad,
          resistencia, voltaje de un circuito en serie
        </Text>
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
            1-. Calcular la resistencia equivalente/total
          </Text>
          <View style={[styles.borderDiv, {padding: 20}]}>
            <View style={[{marginTop: 10}]}>
              <Text style={{textAlign: 'center'}}>Formula</Text>
              <Text style={[{textAlign: 'center'}]}>
                Resistencia total/equivalente : R1 + R2 + R3 + ... + Rn
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
                        keyboardType="numeric"
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
        <Text
          style={[
            {
              textAlign: 'center',
              color: '#000000',
              fontWeight: 'bold',
              marginTop: 20,
            },
          ]}>
          2-. Calcular la intensidad del circuito
        </Text>
        <View style={[styles.borderDiv, {padding: 20}]}>
          <View style={[{marginTop: 10}]}>
            <Text style={{textAlign: 'center'}}>Formula</Text>
            <Text style={[{textAlign: 'center'}]}>
              Resistencia total : I = V total/R total
            </Text>
            <View>
              <View style={{marginTop: 10, padding: 10}}>
                <View style={styles.resistanceContainer}>
                  <View style={styles.omegaContainer}>
                    <Text style={styles.omegaText}>Ω</Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Ingrese su intensidad"
                      keyboardType="numeric"
                      onChangeText={text => setVoltaje(text)}
                    />
                  </View>
                </View>
                {intensidad !== 0 && (
                  <Text style={{marginTop: 10, textAlign: 'center'}}>
                    Intensidad (I): {intensidad.toFixed(2)} A
                  </Text>
                )}

                <TouchableOpacity
                  style={[
                    styles.boton,
                    styles.textShadowOnButtons,
                    {margin: 10},
                  ]}
                  onPress={calcularIntensidad}>
                  <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                    Calcular Intensidad
                  </Text>
                </TouchableOpacity>
              </View>
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
            3-. Calcular el voltaje total
          </Text>
          <View style={[styles.borderDiv, {padding: 20, margin: 5}]}>
            <View style={[{marginTop: 10}]}>
              <Text style={{textAlign: 'center'}}>Formula</Text>
              <Text style={[{textAlign: 'center'}]}>
                Voltaje total : V1 + V2 + V3 + ... + Vn
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
                        placeholder="Ingrese su voltaje"
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
                  Añadir voltaje
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.boton, styles.textShadowOnButtons, {margin: 10}]}
                onPress={clearVoltaje}>
                <Text style={[styles.botonTexto, {textAlign: 'center'}]}>
                  Eliminar Voltaje
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
                Para calcular el voltaje total de un circuito en serie, sumamos
                todos los voltajes del circuito
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Voltaje Total: {totalVoltaje.toFixed(2)} V
              </Text>
            </View>
          </View>
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
