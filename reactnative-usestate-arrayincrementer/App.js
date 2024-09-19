import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const [numbers, setNumbers] = useState([5, 6, 7])

  return (
    <View>
      <Button
        title="+1 each element in arr"
        onPress={() => {
          setNumbers(prevNumbers => prevNumbers.map(num => num + 1))
        }}
      />
      <Text>
        [{numbers.join(', ')}]
      </Text>
      
    </View>
  )
}