import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const EleatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
       <ScrollView style= {styles.container} horizontal={true}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😊</Text>
        </View>
       </ScrollView>
    </View>
  )
}

const styles = {
    headingText:{
        fontSize: 28,
        color: '#808080',
        fontWeight: 'bold',
        padding: 8,
    },
    container:{
        paddingHorizontal: 8,

    },
    card:{
        width:100,
        height:100,
        flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       margin: 8,
    },
    cardElevated:{
        backgroundColor: '#CAD5E2',
        shadowColor: '#333',
        shadowRadius: 2,
        shadowOpacity: 0.4,
    },
}

export default EleatedCard