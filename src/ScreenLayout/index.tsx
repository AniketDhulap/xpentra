import {
	createNavigatorFactory,
	DefaultNavigatorOptions,
	ParamListBase,
	TabActionHelpers,
	TabNavigationState,
	TabRouter,
	TabRouterOptions,
	useNavigationBuilder,
} from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationComponent from '../Components/NavigationComponent';
import { COLORS } from '../Libs';

/**
 * Supported screen options
 */
type TabNavigationOptions = {
	title?: string;
};

type TabNavigationEventMap = {
	tabPress: {
		data: { isAlreadyFocused: boolean };
		canPreventDefault: true;
	};
};

/**
 * The props accepted by the component is a combination of 3 things
 */
type Props = DefaultNavigatorOptions<
	ParamListBase,
	TabNavigationState<ParamListBase>,
	TabNavigationOptions,
	{}
> &
	TabRouterOptions;

function TabNavigator({
	initialRouteName,
	children,
	screenOptions,
	backBehavior,
}: Props) {
	const { state, navigation, descriptors, NavigationContent } =
		useNavigationBuilder<
			TabNavigationState<ParamListBase>,
			TabRouterOptions,
			TabActionHelpers<ParamListBase>,
			TabNavigationOptions,
			TabNavigationEventMap
		>(TabRouter, {
			children,
			screenOptions,
			initialRouteName,
			backBehavior,
		});

	return (
		<NavigationContent>
			<SafeAreaView
				style={{
					paddingHorizontal: 10,
					backgroundColor: COLORS.white,
					flex: 1,
				}}>
				<View
					key={state.routes[state.index].key}
					style={{ flex: 1, minWidth: '100%' }}>
					{descriptors[state.routes[state.index].key].render()}
				</View>
			</SafeAreaView>
			<NavigationComponent />
		</NavigationContent>
	);
}

export default createNavigatorFactory<
	TabNavigationState<ParamListBase>,
	TabNavigationOptions,
	{},
	typeof TabNavigator
>(TabNavigator);
