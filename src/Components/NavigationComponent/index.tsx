import {
	NavigationProp,
	useNavigation,
	useNavigationState,
} from '@react-navigation/native';
import { FC } from 'react';
import {
	Image,
	ImageSourcePropType,
	TouchableOpacity,
	View,
	StyleSheet,
} from 'react-native';
import { COLORS, RADIUS, SPACING } from '../../Libs';
import { INITIAL_ROUTE_NAME, MENU_ITEM_LABELS_E } from '../../Utils/enum';
import styles from './style';

interface NavigationItem {
	tabName: keyof typeof MENU_ITEM_LABELS_E;
	icon: ImageSourcePropType;
	'active-icon': ImageSourcePropType;
}

export type RootStackParamList = {
	[MENU_ITEM_LABELS_E.HOME]: undefined;
	[MENU_ITEM_LABELS_E.PRODUCT_DETAIL]: { productId: number };
	[MENU_ITEM_LABELS_E.CART]: undefined;
	[MENU_ITEM_LABELS_E.FAVORITES]: undefined;
	[MENU_ITEM_LABELS_E.NOTIFICATIONS]: undefined;
	[MENU_ITEM_LABELS_E.PROFILE]: undefined;
};

const NavigationComponent: FC = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const routeName = useNavigationState((state) => {
		if (!state || !state.routes) return INITIAL_ROUTE_NAME;
		const route = state.routes[state.index];
		return route.name;
	});

	const NAVIGATION_LIST: NavigationItem[] = [
		{
			tabName: MENU_ITEM_LABELS_E.HOME,
			icon: require('../../Assets/navigationIcons/home.png'),
			'active-icon': require('../../Assets/navigationIcons/home-active.png'),
		},
		{
			tabName: MENU_ITEM_LABELS_E.CART,
			icon: require('../../Assets/navigationIcons/cart.png'),
			'active-icon': require('../../Assets/navigationIcons/cart-active.png'),
		},
		{
			tabName: MENU_ITEM_LABELS_E.FAVORITES,
			icon: require('../../Assets/navigationIcons/fav.png'),
			'active-icon': require('../../Assets/navigationIcons/fav-active.png'),
		},
		{
			tabName: MENU_ITEM_LABELS_E.NOTIFICATIONS,
			icon: require('../../Assets/navigationIcons/notification.png'),
			'active-icon': require('../../Assets/navigationIcons/notification-active.png'),
		},
		{
			tabName: MENU_ITEM_LABELS_E.PROFILE,
			icon: require('../../Assets/navigationIcons/profile.png'),
			'active-icon': require('../../Assets/navigationIcons/profile-active.png'),
		},
	];

	if (routeName === MENU_ITEM_LABELS_E.PRODUCT_DETAIL) {
		return null;
	}

	return (
		<View style={styles.container}>
			{NAVIGATION_LIST.map((navItem: NavigationItem, index: number) => {
				return (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate(navItem.tabName as any);
						}}
						key={index}
						style={styles.navItemWrapper}>
						<Image
							source={
								routeName === navItem.tabName
									? navItem['active-icon']
									: navItem.icon
							}
							style={styles.icon}
						/>
						{routeName === navItem.tabName && (
							<View style={styles.activeIndicator} />
						)}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default NavigationComponent;
