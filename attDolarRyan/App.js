import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Moeda from './Componentes/Moeda';
import APIMoedas from './Componentes/Api';

export default function App() {

    const [moeda, setMoeda] = useState("");
    //const [libra, setLibra] = useState("");

    async function DolarPrice(){
      const resposta = await APIMoedas.get('json/last/USD-BRL');
      setMoeda(resposta.data.USDBRL);
    }

    async function LibrePrice(){
      const resposta = await APIMoedas.get('json/last/BRL-GBP');
      setMoeda(resposta.data.BRLGBP);
    }

    async function EuroPrice(){
      const resposta = await APIMoedas.get('json/last/EUR-USD');
      setMoeda(resposta.data.EURUSD);
    }

    function limpar(){
      setMoeda("");
    }


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HELLO WORLD!</Text>
      <View style={styles.texto}>
          <Text style={styles.texto}>COTAÇÃO MOEDAS:</Text>

          <TouchableOpacity
          style={styles.bloco}
          onPress={DolarPrice}>
              <Text style={styles.txtBloco}>DÓLAR PARA REAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={LibrePrice}>
              <Text style={styles.txtBloco}>REAL PARA LIBRA</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={EuroPrice}>
              <Text style={styles.txtBloco}>EURO PARA DÓLAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.bloco}
          onPress={limpar}>
              <Text style={styles.txtBloco}>LIMPAR</Text>
          </TouchableOpacity>
          <Moeda data={moeda}/>
  

    

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
      fontSize: 25,

  },

  input: {
    width: 200,
    borderBottomWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    marginTop: '3%',
    textAlign: 'center',
    backgroundColor: '#E6F5FF'
  },

  txtBloco: {
    marginTop: 10,
      backgroundColor: '#F4D2BD',
      borderWidth: 2,
      borderColor: '#E8F7FF',
      borderRadius: 10,
      width: 200,
      textAlign: 'center',
      height: 40, 
      padding: 5, 
      fontSize: 20,
    }
});
