import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style= {styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>

        <Image 
         source={{
            uri:'https://plus.unsplash.com/premium_photo-1661901647310-4deafc6f29a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         }}
         style={styles.cardImage}
        />
         <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>HawaMahal</Text>
            <Text style ={styles.cardLabel}>Pink City,Jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
            <Text style={styles.cardFooter}>12 min away</Text>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    cardImage:{
        height:180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle:{
        color:'#000000',
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardLabel:{
        color:'#000000',
        fontSize: 16,
    },
    cardDescription:{
        marginBottom: 12,
        marginTop:6,
    },
    cardFooter:{},
    card:{
        width:350,
        height:380,
        borderWidth:2,
        borderColor: '#a8aaad',
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width:1,
            height:1,
        },
    },

})

