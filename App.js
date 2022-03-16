import { View, Text } from 'react-native'
import React from 'react'
import { Constants } from 'react-native-unimodules';


const App = () => {
  console.log(Constants.systemFonts);
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App