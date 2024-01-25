import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

//background: #131d2b
//explore icon background: #cfeeeb
//explore icon: #00a598

//help icon backgrund: #cddff7
//help icon: #0870e3

export default function Help({help}: {help: {icon: React.ComponentProps<typeof Entypo>['name'], text: string, color: string, bgcolor: string}}) {
  return (
    <View style={{backgroundColor: '#131d2b', padding: 15, height: 140, width: 140, borderRadius: 15, marginRight: 10}}>
      <View style={{flex: 1}}>
        <View style={{padding: 8, backgroundColor: help.bgcolor, alignSelf: 'flex-start', borderRadius: 50}}>
          <Entypo name={help.icon} size={24} color={help.color} />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{ alignSelf: 'flex-end'}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>{help.text}</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})