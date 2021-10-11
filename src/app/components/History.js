import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function History() {
  const styles = StyleSheet.create({
    history: {
      height: 190,
      borderWidth: 0
    },
    historyTitle: {
      textAlign: 'center',
      paddingHorizontal: 20,
      fontSize: 24,
      color: '#444',
      fontWeight: 'bold',
      marginBottom: 20,
      borderWidth: 0
    },
    historyText: {
      color: '#777',
      textAlign: 'center',
      paddingHorizontal: 20,
      borderWidth: 0
    }
  })

  return (
    <View style={styles.history}>
      <Text style={styles.historyTitle}>Teste</Text>
      <Text style={styles.historyText}>
        {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.`}
      </Text>
    </View>
  )
}
