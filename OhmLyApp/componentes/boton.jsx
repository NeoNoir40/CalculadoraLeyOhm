import {Text, View, TouchableOpacity , StyleSheet} from 'react-native';

export default function Boton({texto, navigation, ruta}){
    return(
        <TouchableOpacity onPress={() => navigation.navigate(ruta)} style={styles.boton}>
          <Text style={styles.botonTexto}>
            {texto}
          </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#E02244',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});