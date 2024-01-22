import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Actions, Adverts, Helps } from '@/constants/Data';
import Action from '@/components/Action';
import Help from '@/components/Help';
import Ad from '@/components/Ad';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <ScrollView>
      <View></View>
      <View>
        {Actions.map((action, id) => (
          <Action action={action} />
        ))}
      </View>
      <View>
        {Helps.map((help, id) => (
          <Help help={help} />
        ))}
      </View>
      <View>
        {Adverts.map((ad, id) => (
          <Ad ad={ad} />
        ))}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
