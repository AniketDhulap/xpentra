import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './appStyle';
import StackNavigator from './src/Navigator/StackNavigator';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<StackNavigator />
		</View>
	);
}
