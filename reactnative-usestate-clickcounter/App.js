import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View>
      <Button
        title="+1"
        onPress={() => {
          setCount(prevCount => prevCount + 1)
        }}
      />
      <Text>
        Giá trị hiện tại: {count}
      </Text>
    </View>
  )
}