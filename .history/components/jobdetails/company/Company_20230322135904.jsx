import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ( companyLogo, jobTitle, CompanyName, Location ) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image />

      </View>
      
    </View>
  )
}

export default Company