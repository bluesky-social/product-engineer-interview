import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[
      {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5F9FF',
        padding: 32,
      }
    ]}>
      <Text style={{
        fontSize: 32,
      }}>Bluesky</Text>
    </View>
  );
}
