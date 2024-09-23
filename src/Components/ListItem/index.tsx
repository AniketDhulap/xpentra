import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Skeleton } from '@rneui/themed';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { scale } from '../../Constants';
import { COLORS } from '../../Libs';
import { MENU_ITEM_LABELS_E } from '../../Utils/enum';
import { Product } from '../../Utils/interfaces';
import CommonHeading from '../CommonHeading';
import { RootStackParamList } from '../NavigationComponent';
import { listItemStyles } from './style';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const DefaultProductImage = require('../../Assets/product.png');

interface IListItem {
	item: Product;
	index: number;
}

export const SkeletonListItem: FC = () => {
	return (
		<View style={listItemStyles.skeletonContainer}>
			<View style={listItemStyles.listItem}>
				<Skeleton
					width={80}
					height={80}
					style={listItemStyles.listImage}
					animation="pulse"
				/>
				<View style={listItemStyles.listData}>
					<Skeleton
						animation="pulse"
						width="90%"
						height={18}
						style={listItemStyles.skeletonHeading}
					/>
					<Skeleton
						animation="pulse"
						width="60%"
						height={15}
						style={listItemStyles.skeletonSubheading}
					/>
					<Skeleton animation="pulse" width="40%" height={15} />
				</View>
			</View>
		</View>
	);
};

const ListItem: FC<IListItem> = ({ item }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const navigateToProductDetails = (productId: number) => {
		// Navigate to the ProductDetail screen with productId as a parameter
		navigation.navigate(MENU_ITEM_LABELS_E.PRODUCT_DETAIL, { productId });
	};

	return (
		<TouchableOpacity
			onPress={() => navigateToProductDetails(item.id)}
			style={listItemStyles.listItemWrapper}>
			<View style={listItemStyles.listItem}>
				<Image
					style={listItemStyles.listImage}
					src={item.thumbnail ? item.thumbnail : DefaultProductImage}
				/>

				<View style={listItemStyles.listData}>
					<CommonHeading
						heading={item.title}
						headingType="mainHeading"
						color={COLORS.textColor}
						fontSize={scale(14.5)}
					/>

					<CommonHeading
						heading={item.category}
						headingType="default"
						color={COLORS.secondaryTextColor}
						numberOfLine={1}
					/>
					<CommonHeading
						heading={`$${item.price}`}
						headingType="mainHeading"
						color={COLORS.textColor}
						fontSize={scale(13)}
					/>
				</View>
				<TouchableOpacity style={listItemStyles.favIconWrapper}>
					<Text>♡</Text>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

export default ListItem;
