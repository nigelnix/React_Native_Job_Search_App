import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ( {iconUrl, dimension, handlePress} ) => {
  return (
    <TouchableOpacity>
      <Image style={styles.btnContainer}
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn