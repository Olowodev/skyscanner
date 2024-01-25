import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//#d90861

export default function Flight({flight}: {flight: {CO2: number,
    stop: string,
    duration1: string,
    price: string,
    airline: string,
    time1: string,
    duration2: string,
    time2: string}}) {
  return (
    <View style={{borderRadius: 10, overflow: 'hidden', marginBottom: 10}}>
      <View style={{backgroundColor: '#43505e', paddingHorizontal: 16, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Text style={{flex: 1, color: 'white', fontSize: 11}}>This flight emits {flight.CO2}% less CO2 than a typical flight on this route</Text>
        <View style={{borderColor: 'white', borderWidth: 0.5, height: 20}}></View>
        <Text style={{color: 'white', fontSize: 11}}>More info</Text>
      </View>
      <View style={{backgroundColor: '#131d2b', paddingHorizontal: 16, paddingVertical: 10, gap: 16}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                <View style={{width: 30, height: 30, backgroundColor: 'white', borderRadius: 10}}></View>
                <View style={{gap: 8}}>
                <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>{flight.time1}</Text>
                <Text style={{color: 'white'}}>LHR-LOS, {flight.airline}</Text>
                </View>
            </View>
            <View style={{gap: 8}}>
                <Text style={{color: 'white'}}>{flight.stop}</Text>
                <Text style={{color: 'white'}}>{flight.duration1}</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                <View style={{width: 30, height: 30, backgroundColor: 'white', borderRadius: 10}}></View>
                <View style={{gap: 8}}>
                <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>{flight.time2}</Text>
                <Text style={{color: 'white'}}>LHR-LOS, {flight.airline}</Text>
                </View>
            </View>
            <View style={{gap: 8}}>
                <Text style={{color: 'white'}}>{flight.stop}</Text>
                <Text style={{color: 'white'}}>{flight.duration2}</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
            <Text style={{color: 'white', fontWeight: '800', fontSize: 16}}>{flight.price}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})