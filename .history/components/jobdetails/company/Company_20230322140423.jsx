import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ( companyLogo, jobTitle, CompanyName, Location ) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{
            uri: checkImageURL(companyLogo)
            ? companyLogo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          style={styles.logoImage}
        />

      </View>
      <Text style={styles.}></Text>
      
    </View>
  )
}

export default Company