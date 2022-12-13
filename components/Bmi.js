import { useState } from 'react';
import {
  StyleSheet,  
  View,  
  Text    
} from 'react-native';
import BmiResult from './BmiResult';
import PersonMeasurements from './PersonMeasurements';

const Classification = {
  DEFAULT: '',
  GRAVE_THINNESS: 'Magreza grave',
  MODERATE_THINNESS: 'Magreza moderada',
  LIGHT_THINNESS: 'Magreza leve',
  HEALTHY: 'Saudável',
  OVERWEIGHT: 'Sobrepeso',
  GRADE_OBESITY: 'Obesidade grau 1',
  GRADE_OBESITY_SEVERE: 'Obesidade grau 2 (severa)',
  GRADE_OBESITY_MORBID: 'Obesidade grau 3 (mórbida)'
}

export default () => {
  const [bmi, setBmi] = useState(undefined);
  const [classification, setClassification] = useState(Classification.DEFAULT);

  const calculateBmi = ({ weight, height }) => {
    weight = weight.replace(',', '.');
    height = height.replace(',', '.');
    const bmi = parseFloat(weight / (height * height)).toFixed(2);
    
    setBmi(bmi);
    setClassification(getClassification(bmi));
  };

  const getClassification = (bmi) => {
    if (bmi < 16) return Classification.GRAVE_THINNESS;
    if (bmi < 17) return Classification.MODERATE_THINNESS;
    if (bmi < 18.5) return Classification.LIGHT_THINNESS;
    if (bmi < 25) return Classification.HEALTHY;
    if (bmi < 30) return Classification.OVERWEIGHT;
    if (bmi < 35) return Classification.GRADE_OBESITY;
    if (bmi < 40) return Classification.GRADE_OBESITY_SEVERE;
    if (bmi >= 40) return Classification.GRADE_OBESITY_MORBID;
    return Classification.DEFAULT;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        IMC
      </Text>

      <Text style={styles.subtitle}>
        Calcule o seu IMC
      </Text>

      <View style={styles.lineStyle} />

      <PersonMeasurements calculateBmi={calculateBmi} />

      <View style={styles.lineStyle} />
      
      <BmiResult bmi={bmi} classification={classification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 42
  },  
  lineStyle:{
    height: 1,    
    backgroundColor: '#008040',
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    backgroundColor: '#008040',
    height: 60,
    color: '#FFFFFF',
    fontSize: 18,
    padding: 20
  },
  subtitle: {
    fontSize: 22,
    padding: 12,
    textAlign: 'center',
    color: '#aaaaaa'
  }  
});
