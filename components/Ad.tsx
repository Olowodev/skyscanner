import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Ad({ad}: {ad: {image: string, smallText?: string, largeText: string}}) {
  return (
    <View>
      <Text>Ad</Text>
    </View>
  )
}

const styles = StyleSheet.create({})