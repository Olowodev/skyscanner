import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

//action background color: #84e8ff
//icon color: #000913

export default function Action({action}: {action: {icon: string, text: string}}) {
  return (
    <Link href={{pathname: action.text == 'Car Hire' ? null : '/[actionPage]', params: {actionPage: action.text == 'Short Lets' ? 'ShortLets' : action.text}}} asChild>
    <TouchableOpacity>
    <View style={{alignItems: 'center'}}>
      <View style={{backgroundColor: '#84e8ff', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, marginBottom: 10}}>
        {action.icon == 'hotel' ?
        <FontAwesome6 name="hotel" size={24} color="#000913" />
        :
        action.icon == 'airplanemode-on' ?
        <MaterialIcons name="airplanemode-on" size={28} color="#000913" />
        :          
        <MaterialCommunityIcons name="car-hatchback" size={34} color="#000913" />
        }
      </View>
      <Text style={{color: 'white', fontWeight: '600'}}>{action.text}</Text>
    </View>
    </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({})