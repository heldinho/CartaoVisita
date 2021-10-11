import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Wrapper(props) {
  const { children } = props

  const styles = StyleSheet.create({
    wrapper: {
      position: 'relative',
      overflow: 'visible',
      width: 400,
      height: 400,
      borderWidth: 0,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      backgroundColor: '#fff'
    }
  })

  return <View style={styles.wrapper}>{children}</View>
}
