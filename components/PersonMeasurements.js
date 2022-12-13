import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Pressable } from 'react-native';

export default ({ calculateBmi }) => {
    const [personMeasurements, setPersonMeasurements] = useState({ weight: undefined, height: undefined });

    const isCannotCalculate = () => !personMeasurements.weight || !personMeasurements.height;  

    return (
      <View style={styles.measurements}>
        <TextInput
          placeholder='Peso'
          value={personMeasurements.weight}
          keyboardType='numeric'
          maxLength={5}
          onChangeText={(weight) => setPersonMeasurements({...personMeasurements, weight})}
        />

        <TextInput                    
          placeholder='Altura'
          value={personMeasurements.height}
          keyboardType='numeric'
          maxLength={5}
          onChangeText={(height) => setPersonMeasurements({...personMeasurements, height})}
        />

        <View style={styles.buttons}>
          <Pressable
            style={styles.button(isCannotCalculate())}
            disabled={isCannotCalculate()}
            onPress={() => calculateBmi(personMeasurements)}
          >
            <Text>Calcular</Text>
          </Pressable>

          <Pressable
            style={styles.button(false)}          
          >
            <Text>Limpar</Text>
          </Pressable>
          </View>
      </View>      
    );
}

const styles = StyleSheet.create({
  measurements: {        
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8
  },
  buttons: {    
    flexDirection: 'row',
    justifyContent: 'center'        
  },
  button: (isDisable) => {
    return {
      width: 100,
      marginLeft: 10,
      padding: 8,
      backgroundColor: isDisable ? '#aaaaaa' : '#008040',
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center"
    }
  }
});