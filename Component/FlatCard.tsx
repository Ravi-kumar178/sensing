import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.cardOne,styles.box]}>
            <Text style={[styles.text]}>Red</Text>
        </View>
        <View style={[styles.cardTwo,styles.box]}>
            <Text style={[styles.text]}>Green</Text>
        </View>
        <View style={[styles.cardThree,styles.box]}>
            <Text style={[styles.text]}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 28,
        color: '#808080',
        fontWeight: 'bold',
        padding: 8,
    },
    box:{
        height:100,
        width:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 8, 
    },
    cardOne:{
        backgroundColor:'#EF5354',
    },
    cardTwo:{
        backgroundColor:'#50DBB4',
    },
    cardThree:{
        backgroundColor:'#5DA3FA',
    },
    text:{
        fontSize: 18,
        fontWeight: '500',
    },
    container:{
        flex:1,
        flexDirection: 'row',
    }
})

export default FlatCard