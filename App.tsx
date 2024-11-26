import React from 'react';
import {  SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import FlatCard from './Component/FlatCard';
import EleatedCard from './Component/EleatedCard';
import FancyCard from './Component/FancyCard';

const App = () => {
  return (
    
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatCard/>
        <EleatedCard/>
        <FancyCard/>
        <FancyCard/>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  scrollContainer:{
    padding: 16,
  },
})
export default App;
