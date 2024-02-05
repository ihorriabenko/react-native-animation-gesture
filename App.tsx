import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={s.container}>
      <Animated.View
        style={{
          width,
          height: 100,
          borderRadius: 16,
          backgroundColor: 'violet',
        }}
      />
      <Button title="Press me" onPress={handlePress} />
      <Button title="Reset" onPress={() => (width.value = withSpring(100))} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
