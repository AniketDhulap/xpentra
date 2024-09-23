import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
	Image,
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import CommonButton from '../../../Components/CommonButton';
import CommonHeaderBox from '../../../Components/CommonHeaderBox';
import CommonHeading from '../../../Components/CommonHeading';
import { scale } from '../../../Constants';
import { COLORS, SPACING } from '../../../Libs';
import { Product } from '../../../Utils/interfaces';
import { fetchProductDetails } from './product.service';
import ProductDetailSkeleton from './scaleton';
import { style } from './styles';

const ProductDetail = () => {
	const route = useRoute();
	const { productId } = route.params as { productId: number };

	const [product, setProduct] = useState<Product>({
		availabilityStatus: '',
		brand: '',
		category: '',
		description: '',
		dimensions: {
			depth: 0,
			height: 0,
			width: 0,
		},
		discountPercentage: 0,
		id: 0,
		images: [],
		meta: {
			barcode: '',
			createdAt: '',
			qrCode: '',
			updatedAt: '',
		},
		minimumOrderQuantity: 0,
		price: 0,
		rating: 0,
		returnPolicy: '',
		reviews: [],
		shippingInformation: '',
		sku: '',
		stock: 0,
		tags: [],
		thumbnail: '',
		title: '',
		warrantyInformation: '',
		weight: 0,
	});
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	const handleFetchProductsDetails = async (productId: number) => {
		try {
			setLoading(true);
			const productDetails = await fetchProductDetails(productId);
			if (productDetails) {
				setProduct(productDetails);
			}
		} catch (getProductDetailsError) {
			console.error('getProductDetailsError ::', getProductDetailsError);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleFetchProductsDetails(productId);
	}, [productId]);

	const onRefresh = async () => {
		setRefreshing(true);
		await handleFetchProductsDetails(productId);
		setRefreshing(false);
	};

	if (loading) {
		return <ProductDetailSkeleton />;
	}

	return (
		<View style={{ flex: 1 }}>
			<CommonHeaderBox heading="Product Details" />
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>
				<View style={style.media}>
					<Image style={style.image} source={{ uri: product.thumbnail }} />
					<TouchableOpacity style={style.heartIcon}>
						<Text>♡</Text>
					</TouchableOpacity>
				</View>

				<View style={style.productHeader}>
					<CommonHeading
						heading={product.title}
						headingType="mainHeading"
						color={COLORS.textColor}
						fontSize={scale(10) * 1.5}
					/>
					<CommonHeading
						heading={`$${product.price}`}
						headingType="mainHeading"
						color={COLORS.primary}
						fontSize={scale(15)}
					/>
				</View>

				<View style={style.productDetails}>
					<View style={style.detailRow}>
						<Text
							style={[
								style.heading,
								{ fontSize: scale(14), color: COLORS.primary },
							]}>
							Availability:{' '}
							<Text style={style.value}>{product.availabilityStatus}</Text>
						</Text>
						<Text
							style={[
								style.heading,
								{ fontSize: scale(14), color: COLORS.primary },
							]}>
							Rating: <Text style={style.value}>{product.rating} / 5</Text>
						</Text>
					</View>

					<View style={style.detailRow}>
						<Text
							style={[
								style.heading,
								{ fontSize: scale(14), color: COLORS.primary },
							]}>
							Stock: <Text style={style.value}>{product.stock} units</Text>
						</Text>
						<Text
							style={[
								style.heading,
								{ fontSize: scale(14), color: COLORS.primary },
							]}>
							Min Order:{' '}
							<Text style={style.value}>{product.minimumOrderQuantity}</Text>
						</Text>
					</View>
				</View>

				<View style={style.buttonWrapper}>
					<CommonButton
						buttonText="Buy Now"
						onPress={() => {}}
						varient="filled"
						buttonStyle={{ paddingVertical: SPACING.extra_large }}
					/>
					<CommonButton
						buttonText="Add to Cart"
						onPress={() => {}}
						varient="outlined"
						buttonStyle={{ paddingVertical: SPACING.extra_large }}
					/>
				</View>

				{/* Product Description */}
				<View style={style.descriptionSection}>
					<CommonHeading
						heading="Description"
						headingType="mainHeading"
						color={COLORS.primary}
						fontSize={scale(15)}
					/>

					<CommonHeading
						heading={product.description}
						headingType="paragraph"
						color={COLORS.linkTextColor}
						fontSize={scale(13)}
					/>
				</View>

				{/* Additional Information */}
				<View style={style.additionalInfoSection}>
					<CommonHeading
						heading="Additional Information"
						headingType="mainHeading"
						color={COLORS.primary}
						fontSize={scale(15)}
					/>

					<View>
						<View style={style.infoBlock}>
							<Text style={style.heading}>Barcode:</Text>
							<Text style={style.value}>{product.meta.barcode}</Text>
						</View>

						<View style={style.infoBlock}>
							<Text style={style.heading}>Dimensions (LxWxH):</Text>
							<Text style={style.value}>
								{product.dimensions.depth} x {product.dimensions.width} x{' '}
								{product.dimensions.height}
							</Text>
						</View>

						<View style={style.infoBlock}>
							<Text style={style.heading}>Weight:</Text>
							<Text style={style.value}>{product.weight} kg</Text>
						</View>

						<View style={style.infoBlock}>
							<Text style={style.heading}>Warranty Information:</Text>
							<Text style={style.value}>{product.warrantyInformation}</Text>
						</View>

						<View style={style.infoBlock}>
							<Text style={style.heading}>Return Policy:</Text>
							<Text style={style.value}>{product.returnPolicy}</Text>
						</View>

						<View style={style.infoBlock}>
							<Text style={style.heading}>Shipping Information:</Text>
							<Text style={style.value}>{product.shippingInformation}</Text>
						</View>
					</View>
				</View>

				{/* Reviews Section */}
				<View style={style.reviewsSection}>
					<CommonHeading
						heading="Customer Reviews"
						headingType="mainHeading"
						color={COLORS.primary}
						fontSize={scale(15)}
					/>

					{product.reviews.length > 0 ? (
						product.reviews.map((review, index) => (
							<View key={index} style={{ marginVertical: SPACING.small }}>
								<Text style={style.heading}>
									{review.reviewerName} ({review.rating}/5)
								</Text>
								<Text style={style.value}>{review.comment}</Text>
								<Text style={style.value}>
									Date: {new Date(review.date).toLocaleDateString()}
								</Text>
							</View>
						))
					) : (
						<Text style={style.value}>No reviews yet.</Text>
					)}
				</View>
			</ScrollView>
		</View>
	);
};

export default ProductDetail;
