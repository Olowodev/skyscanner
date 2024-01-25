import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Flights, Hotels } from '@/constants/Data'
import Hotel from '@/components/Hotel'
import Flight from '@/components/Flight'
import { Ionicons } from '@expo/vector-icons';
import { router, useFocusEffect, usePathname } from 'expo-router'

// top background #131d2b
//input #243246
//green #0d8389

type tab = '/Flights' | '/Hotels' | '/ShortLets'

export default function ActionPage() {
  const [tab, setTab] = useState<tab | string>('/Flights')
  const pathname = usePathname()
  console.log(pathname)

  useEffect(() => {
    setTab(pathname)
    console.log('setting', pathname)
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: '#131d2b' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#131d2b', paddingHorizontal: 16 }}>
          <TouchableOpacity onPress={()=> router.back()} style={{flex: 1}}>
          <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 7 }}>
            <TouchableOpacity onPress={() => setTab('/Flights')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderBottomColor: 'green', borderBottomWidth: tab == '/Flights' ? 2 : 0 }}>
              <Text style={{ color: 'white' }}>Flights</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab('/Hotels')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderBottomColor: 'green', borderBottomWidth: tab == '/Hotels' ? 2 : 0 }}>
              <Text style={{ color: 'white' }}>Hotels</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab('/ShortLets')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderBottomColor: 'green', borderBottomWidth: tab == '/ShortLets' ? 2 : 0 }}>
              <Text style={{ color: 'white' }}>Short Lets</Text>
            </TouchableOpacity>
          </View>
        </View>
        {tab == '/Flights' ?
          <View style={{paddingHorizontal: 16, backgroundColor: 'black', flex: 1}}>
            <View style={{ flexDirection: 'row', gap: 10, marginVertical: 15 }}>
              <Text style={{ color: 'white' }}>Return</Text>
              <Text style={{ color: 'white' }}>One Way</Text>
              <Text style={{ color: 'white' }}>Multi-city</Text>
            </View>
            <View>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <View style={{ flex: 1, backgroundColor: '#243246', padding: 8, borderRadius: 4 }}>
                  <Text style={{ color: 'white' }}>London Heathrow</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#243246', padding: 8, borderRadius: 4 }}>
                  <Text style={{ color: 'white' }}>Lagos</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: 5, marginTop: 5 }}>
                <View style={{ flex: 1, backgroundColor: '#243246', padding: 8, borderRadius: 4 }}>
                  <Text style={{ color: 'white' }}>Mon 29 Jan</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#243246', padding: 8, borderRadius: 4 }}>
                  <Text style={{ color: 'white' }}>Mon 05 Feb</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flexDirection: 'row', gap: 12 }}>
                <Text style={{ color: 'white' }}>1 traveller</Text>
                <Text style={{ color: 'white' }}>Economy Class</Text>
              </View>
              <Text style={{ color: 'white' }}>Filter</Text>
            </View>
            <View style={{ marginTop: 10, borderColor: '#243246', borderRadius: 20, borderWidth: 2, alignSelf: 'flex-start', flexDirection: 'row', gap: 20, paddingHorizontal: 10, paddingVertical: 8, alignItems: 'center' }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontSize: 24}}>27</Text>
                    <View style={{width: 10, height: 10, borderColor: 'white', borderRadius: 100, borderWidth: 2, marginTop: 5}}></View>
                  </View>
                  <Image style={{width: 40, height: 40}} source={require('@/assets/images/rainy.png')} />
                </View>
            <ScrollView style={{flex: 1, marginTop: 10}}>
              {Flights.map((flight, id) => (
                <Flight flight={flight} key={id} />
              ))}
            </ScrollView>
          </View>
          : tab == '/Hotels' || '/ShortLets' ?
            <View style={{flex: 1}}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, gap: 8, paddingHorizontal: 16 }}>
                <TextInput style={{ backgroundColor: '#243246', flex: 5, paddingVertical: 8, borderRadius: 4, paddingHorizontal: 8, fontWeight: '600' }} placeholderTextColor={'white'} placeholder='Lagos' />
                <View>
                  <View></View>
                  <View style={{ backgroundColor: '#243246', justifyContent: 'center', paddingHorizontal: 8, borderRadius: 4, flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>24 Jan</Text>
                    <Text style={{ color: 'white', fontSize: 10 }}>25 Jan</Text>
                  </View>
                </View>
                <View>
                  <View></View>
                  <View style={{ backgroundColor: '#243246', justifyContent: 'center', paddingHorizontal: 8, borderRadius: 4, flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>2</Text>
                  </View>
                </View>
                <View></View>
              </View>
              <View style={{paddingHorizontal: 16, marginBottom: 15}}>
                <Text style={{ color: 'white' }}>1782 results sorted by Best</Text>
              </View>
              <ScrollView style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 16 }}>
                <View style={{ marginVertical: 10, borderColor: '#243246', borderRadius: 20, borderWidth: 2, alignSelf: 'flex-start', flexDirection: 'row', gap: 20, paddingHorizontal: 10, paddingVertical: 8, alignItems: 'center' }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontSize: 24}}>27</Text>
                    <View style={{width: 10, height: 10, borderColor: 'white', borderRadius: 100, borderWidth: 2, marginTop: 5}}></View>
                  </View>
                  <Image style={{width: 40, height: 40}} source={require('@/assets/images/rainy.png')} />
                </View>
                <Text style={{ color: 'white', marginBottom: 10 }}>All taxes and fees included</Text>
                <View style={{gap: 16}}>
                  {Hotels.map((hotel, id) => (
                    <Hotel hotel={hotel} key={id} />
                  ))}
                </View>
              </ScrollView>
            </View>
            :
            null
        }
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})