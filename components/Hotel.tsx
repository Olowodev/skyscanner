import { Image, ImageSourcePropType, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

export default function Hotel({hotel}: {hotel: {image: ImageSourcePropType, distance: string, name: string}}) {

    const {width, height} = Dimensions.get('window')
  return (
    <View style={{backgroundColor: '#131d2b', borderRadius: 20}}>
      <Image style={{width: width - 32, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20}} source={hotel.image} />
      <View style={{padding: 16}}>
        <View>
            <View>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>{hotel.name}</Text>
                <Text style={{color: 'white', marginTop: 8}}>{hotel.distance} miles from city centre</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 16, gap: 10}}>
            <Text style={{color: 'white'}}>4.5/5</Text>
            <Text style={{color: 'white'}}>7,120 reviews</Text>
        </View>
      </View>
      <View style={{borderColor: 'white', borderWidth: 0.5}}></View>
      <View style={{paddingHorizontal: 16, paddingVertical: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{color: 'white'}}>Breakfast included</Text>
        <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 24}}>$259</Text>
            <Text style={{color: 'white'}}>a night</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})