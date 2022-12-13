import { Text, View, StyleSheet } from 'react-native';

export default ({ bmi, classification }) => {       
    return (
      <View style={styles.result}>
        <Text style={styles.resultLabel}>Resultado</Text>
        <Text style={styles.resultValue}>{bmi}</Text>
        <Text style={styles.resultValue}>{classification}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  result: {
    alignItems: 'center',
    justifyContent: 'center'    
  },
  resultLabel: {
    color: '#aaaaaa',
    fontSize: 18
  },
  resultValue: {
    color: '#f31818',
    fontSize: 22
  }
});