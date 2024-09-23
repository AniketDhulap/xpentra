import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import React, { FC, useCallback, useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Image,
	RefreshControl,
	TouchableOpacity,
	View,
} from 'react-native';
import CommonButton from '../../Components/CommonButton';
import CommonInputField from '../../Components/CommonInputField';
import ErrorComponent from '../../Components/ErrorComponent';
import ListItem, { SkeletonListItem } from '../../Components/ListItem';
import { COLORS } from '../../Libs';
import { Product } from '../../Utils/interfaces';
import { getAllProductsList } from './home.service';
import { styles } from './style';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const LOGO = require('../../Assets/Logo/XpentraLogo.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MENU_ICON = require('../../Assets/menu.png');

const Home: FC = () => {
	const [searchInput, setSearchInput] = useState('');
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [page, setPage] = useState(0);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [totalProductsCount, setTotalProductsCount] = useState<number>(0);
	const [error, setError] = useState<string | null>(null);

	const fetchProductsData = async (page: number, isLoadingParam = true) => {
		try {
			if (isLoadingParam) setIsLoading(true);

			const newData = await getAllProductsList({ skip: page, limit: 10 });
			setTotalProductsCount(newData?.total);
			if (newData?.products) {
				setAllProducts((prevProducts) =>
					page === 0 ? newData.products : [...prevProducts, ...newData.products]
				);
			}
		} catch (getProductListError) {
			setError('Failed to load products');
			console.error('getAllLocationsError ::', getProductListError);
		} finally {
			if (isLoadingParam) setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProductsData(page);
	}, []);

	const onRefresh = useCallback(() => {
		if (isRefreshing || isLoadingMore) return;
		setIsRefreshing(true);
		setPage(0);
		fetchProductsData(0).finally(() => setIsRefreshing(false));
	}, [isRefreshing, isLoadingMore]);

	const loadMoreData = async () => {
		if (isLoadingMore || isRefreshing) return;
		setIsLoadingMore(true);
		const newPage = page + 1;
		setPage(newPage);
		fetchProductsData(newPage, false).finally(() => setIsLoadingMore(false));
	};

	const renderItem = ({ item, index }: ListRenderItemInfo<Product>) => (
		<ListItem item={item} index={index} />
	);

	const renderSkeletonLoader = () => <SkeletonListItem />;

	const renderFooter = () => {
		if (isLoadingMore) {
			return (
				<View style={styles.loadingMoreContainer}>
					<ActivityIndicator color={COLORS.primary} size={32} />
				</View>
			);
		}

		const isLastProduct = allProducts.length <= totalProductsCount;

		if (!isLoading && !isRefreshing && isLastProduct) {
			return (
				<View style={styles.loadMoreButtonWrapper}>
					<CommonButton
						buttonText="Load More"
						onPress={loadMoreData}
						varient="filled"
						buttonStyle={styles.loadMoreButton}
					/>
				</View>
			);
		}

		return null;
	};

	return (
		<View style={styles.productScreenWrapper}>
			<View style={styles.headerWrapper}>
				<Image source={LOGO} style={styles.logo} />
				<TouchableOpacity style={styles.menuIconWrapper}>
					<Image source={MENU_ICON} style={styles.menuIcon} />
				</TouchableOpacity>
			</View>

			<View style={styles.searchWrapper}>
				<CommonInputField
					inputMode="text"
					label=""
					onChangeText={(value: string) => setSearchInput(value)}
					placeholder="search here..."
					value={searchInput}
					hideLabel
				/>
			</View>

			<View style={styles.productListWrapper}>
				{error ? (
					<ErrorComponent onReload={onRefresh} />
				) : (
					<FlashList
						data={isLoading || isRefreshing ? [...Array(6)] : allProducts}
						renderItem={
							isLoading || isRefreshing ? renderSkeletonLoader : renderItem
						}
						estimatedItemSize={10}
						showsVerticalScrollIndicator={false}
						refreshControl={
							<RefreshControl refreshing={false} onRefresh={onRefresh} />
						}
						ListFooterComponent={renderFooter}
					/>
				)}
			</View>
		</View>
	);
};

export default Home;
