import { StyleSheet, Text, View, ImageBackground, ImageProps } from 'react-native'
import React from 'react'

export default function Ad({ad}: {ad: {image: ImageProps['source'], smallText?: string, largeText: string}}) {
  return (
    <View style={{flex: 1, height: 430, borderRadius: 40, backgroundColor: 'white', marginBottom: 30}}>
      <ImageBackground source={ad.image} style={{flex: 1, borderRadius: 20, padding: 20, paddingRight: 40, overflow: 'hidden'}}>
        {ad.smallText ? <Text style={{color: 'white', marginBottom: 15, fontWeight: '500', fontSize: 16}}>{ad.smallText}</Text> : null}
        <Text style={{color: 'white', fontWeight: '700', fontSize: 36}}>{ad.largeText}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({})