import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useAppGlobalState} from '../state/global'

// import Theme from '../values/Theme'
   
const ThemeSetting = props => {
  const glbState = useAppGlobalState();
  //size={Theme.sizeXL} 
  return (
    <>
      <TouchableOpacity
        {...props}
        style={[props.style]}
        hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}>
        <Icon name={props.icon} color={glbState.state.themeScheme.text} /> 
      </TouchableOpacity>
    </>
  )
}

export default ThemeSetting