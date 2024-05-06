import { StatusBar } from 'expo-status-bar';
import { Alert,Image,StyleSheet, Text, View } from 'react-native';
import superPng from "./assets/super.png"

export default function App() {
  return (

    // Viem é como se fosse uma div ou um container.
    <View style={styles.container}>

    <Image
    source={superPng}
    style={
      {
        height:60,
        width:60
      }
    }
    />

      <View

      // Evento para toque 
        onTouchStart={(event) =>{
          Alert.alert('toque','Toque Iniciado')
        }}
        onTouchEnd={(event) => {
          Alert.alert('toque','Toque finalizado')
        }}
      >

        {/* Array de estilos, quando eu abro o colchetes consigo passar varias estilizações diferentes para meu componente */}
        <Text 
        style=
        {
          [
            styles.texto, 
            styles.border, 
            {
              color:'blue',
              padding:10
            }
          ]
          }
          >
            Ola</Text>
        <Text 
        style={
          {
            backgroundColor: 'blue', 
            color: 'white',
            padding:20
          }
          }
          >Button no Text</Text>
      </View>
      <Text
      // Selectable deixa o texto selecionavel para copiar e etc
        selectable={true}
        onPress={() => {console.log('pressionado')}}
        onLongPress={() => {console.log('pressionamento longo')}}
      >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
 
      {/* A view não permite a unir texto, por padrão do flex eles vem um de baixo do outro, como uma div */}
      <View>
        <Text>
          Ola
        </Text>
        <Text>
          Mundo
        </Text>
      </View>
      {/* Porém se você envolver o texto em volta de outra tag texto eles vão se unir, isso é um truque muito usasdo para concatenar texto */}
      <Text>
        <Text>Ola</Text>
        <Text> Mundo</Text>
      </Text>
    </View>
  );  
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border:{
    borderColor:'red',
    borderWidth:3,
  },
  texto: {
    fontSize:20,
    fontWeight:'bold'
  },
});
