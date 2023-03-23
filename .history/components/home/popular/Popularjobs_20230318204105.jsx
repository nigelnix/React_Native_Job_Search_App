import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator  } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View styles={styles.header}>
        <Text >Popular jobs</Text>
      </View>
    </View>
  )
}

export default Popularjobs