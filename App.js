import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, span } from 'react-native';


const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}> 
       Welcome to 'Clues To The Loo'
      </Text>
      </View>
      <View style={styles.image}>
        <Image source={require('./toilet.png')}/>
      </View>
      <View style={styles.Button}>
      <Button
        title= "Find the nearest bathroom"
        color= 'black'
        
        //onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>

  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },

  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
     marginHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  title: {
    textAlign: 'center',
    marginVertical: 30,
    fontSize: 29,
    borderRadius: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;