import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function Card(props) {
  const { image, title, bio, instagram, backgroundColor } = props

  const styles = StyleSheet.create({
    card: {
      backgroundColor,
      width: 360,
      height: 200,
      backgroundColor: '#444',
      padding: 20,
      marginHorizontal: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 100,
      resizeMode: 'cover',
      marginRight: 20
    },
    title: {
      color: '#fff',
      fontSize: 18
    },
    textInstagram: {
      color: '#777',
      fontSize: 12
    },
    textBio: {
      color: '#aaa',
      fontSize: 10
    }
  })

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.textInstagram}>{instagram}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View>
          <Text style={styles.textBio}>{bio}</Text>
        </View>
      </View>
    </View>
  )
}
