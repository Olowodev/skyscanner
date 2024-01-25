import { Image, ScrollView, StyleSheet, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';
import { Actions, Adverts, Helps } from '@/constants/Data';
import Action from '@/components/Action';
import Help from '@/components/Help';
import Ad from '@/components/Ad';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'top']}>
     <StatusBar style='light'/> 
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View>
        <Image source={require('@/assets/images/skys.png')} style={{width: 280, height: 100}} resizeMode='contain' />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 40}}>
        {Actions.map((action, id) => (
          <Action action={action} key={id} />
        ))}
      </View>
      <View style={{flexDirection: 'row',alignItems: 'center', marginBottom: 40}}>
        {Helps.map((help, id) => (
          <Help help={help} key={id} />
        ))}
      </View>
      <View>
        {Adverts.map((ad, id) => (
          <Ad ad={ad} key={id} />
        ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
