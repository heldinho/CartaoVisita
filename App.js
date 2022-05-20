import React from 'react'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native'
import Card from './src/app/components/Card'
import History from './src/app/components/History'
import Wrapper from './src/app/components/Wrapper'

const { width, height } = Dimensions.get('window')
const { currentHeight } = StatusBar

const perfils = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('./assets/helder.jpg'),
    title: 'Helder Passos',
    bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus, ex, recusandae.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus, ex, recusandae.`,
    instagram: '@heldinhohp',
    backgroundColor: '#444'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: require('./assets/mary.jpg'),
    title: 'Mary Passos',
    bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus, ex, recusandae.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus, ex, recusandae.`,
    instagram: '@mary.viana.10',
    backgroundColor: '#444'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: require('./assets/miguel.jpg'),
    title: 'Miguel Passos',
    bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus, ex, recusandae.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus, ex, recusandae.`,
    instagram: '@miguel.passos',
    backgroundColor: '#444'
  }
]

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: currentHeight || 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    flatList: {
      top: -30
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <Wrapper>
        <FlatList
          style={styles.flatList}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={perfils}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={item => item.id}
        />
        <History />
      </Wrapper>
    </SafeAreaView>
  )
}
