import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Bars3Icon } from '@heroicons/react/24/solid'

const HeaderBtn = () => {
  return (
    <TouchableOpacity style={{
      width: 50,
      height: 50,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Bars3Icon />
    </TouchableOpacity>
  )
}

export default HeaderBtn