import {
	NavigationProp,
	useNavigation,
	useNavigationState,
} from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { COLORS } from '../../Libs';
import { INITIAL_ROUTE_NAME } from '../../Utils/enum';
import CommonButton from '../CommonButton';
import CommonHeaderBox from '../CommonHeaderBox';
import CommonHeading from '../CommonHeading';
import { RootStackParamList } from '../NavigationComponent';
import styles from './styles';

const ComingSoonPage: FC = () => {

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const routeName = useNavigationState((state) => {
		if (!state || !state.routes) return INITIAL_ROUTE_NAME;
		const route = state.routes[state.index];
		return (
			route.name.charAt(0).toUpperCase() + route.name.slice(1).toLowerCase()
		);
	});

	function navigateToHome() {
		navigation.navigate(INITIAL_ROUTE_NAME);
	}

	return (
		<View style={styles.container}>
			<CommonHeaderBox heading={routeName} />
			<View style={styles.contentContainer}>
				<CommonHeading
					heading="Page Coming Soon - Stay Tuned for Updates!"
					headingType="mainHeading"
					color={COLORS.primary}
					isTextCenter={true}
				/>
				<View style={styles.buttonContainer}>
					<CommonButton
						buttonText="Go to Home"
						onPress={navigateToHome}
						varient="outlined"
						buttonStyle={styles.button}
					/>
				</View>
			</View>
		</View>
	);
};

export default ComingSoonPage;
