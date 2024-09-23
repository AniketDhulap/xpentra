import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import createMyNavigator from '../../ScreenLayout';
import Home from '../../Screens/Home';
import { INITIAL_ROUTE_NAME, MENU_ITEM_LABELS_E } from '../../Utils/enum';
import ProductDetail from '../../Screens/Product/ProductDetails';
import { RootStackParamList } from '../../Components/NavigationComponent';
import ComingSoonPage from '../../Components/ComingSoonPage';

const CustomNavigator = createMyNavigator<RootStackParamList>();

const StackNavigator: FC = () => {
	return (
		<NavigationContainer>
			<CustomNavigator.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
				<CustomNavigator.Screen
					name={MENU_ITEM_LABELS_E.HOME}
					component={Home}
				/>
				<CustomNavigator.Screen
					name={MENU_ITEM_LABELS_E.PRODUCT_DETAIL}
					component={ProductDetail}
				/>
				<CustomNavigator.Screen
					name={MENU_ITEM_LABELS_E.CART}
					component={ComingSoonPage}
				/>
				<CustomNavigator.Screen
					name={MENU_ITEM_LABELS_E.FAVORITES}
					component={ComingSoonPage}
				/>
				<CustomNavigator.Screen
					name={MENU_ITEM_LABELS_E.NOTIFICATIONS}
					component={ComingSoonPage}
				/>
				<CustomNavigator.Screen
					name={MENU_ITEM_LABELS_E.PROFILE}
					component={ComingSoonPage}
				/>
			</CustomNavigator.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigator;
