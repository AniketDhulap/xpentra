import React from 'react';
import { View, ScrollView } from 'react-native';
import { COLORS, DIMENTION, SPACING } from '../../../Libs';
import { Skeleton } from '@rneui/themed';
import CommonWrapper from '../../../Components/CommonWrapper';
import CommonHeaderBox from '../../../Components/CommonHeaderBox';
import { style } from './styles';
import CommonHeading from '../../../Components/CommonHeading';
import { scale } from '../../../Constants';

const ProductDetailSkeleton = () => {
	return (
		<View style={{ flex: 1 }}>
			<CommonHeaderBox heading="Product Details" />
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}>
				<CommonWrapper>
					<View>
						<Skeleton
							height={DIMENTION.HEIGHT * 0.4}
							width="100%"
							animation="pulse"
						/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							borderBottomColor: COLORS.borderColor,
							borderBottomWidth: 2,
							paddingVertical: SPACING.small,
						}}>
						<Skeleton
							animation="pulse"
							width="100%"
							height={20}
							style={{ marginVertical: SPACING.extra_large }}
						/>
					</View>
					<View
						style={{
							marginTop: SPACING.extra_large,
							marginVertical: SPACING.small,
							padding: SPACING.small,
							borderRadius: 8,
							backgroundColor: COLORS.backgroundGray,
						}}>
						<Skeleton
							animation="pulse"
							width="100%"
							height={30}
							style={{ marginBottom: SPACING.extra_large }}
						/>
						<Skeleton
							animation="pulse"
							width="100%"
							height={30}
							style={{ marginBottom: SPACING.extra_large }}
						/>
					</View>
					<View
						style={{
							marginTop: SPACING.extra_large,
							borderTopColor: COLORS.borderColor,
							borderTopWidth: 2,
							borderBottomColor: COLORS.borderColor,
							borderBottomWidth: 2,
							paddingVertical: SPACING.small,
						}}>
						<CommonHeading
							heading="Description"
							headingType="mainHeading"
							color={COLORS.primary}
							fontSize={scale(15)}
						/>

						<Skeleton
							animation="pulse"
							width="100%"
							height={30}
							style={{ marginBottom: SPACING.extra_large }}
						/>
					</View>
					<View
						style={{
							borderBottomColor: COLORS.borderColor,
							borderBottomWidth: 2,
							paddingVertical: SPACING.small,
						}}>
						<CommonHeading
							heading="Additional Information"
							headingType="mainHeading"
							color={COLORS.primary}
							fontSize={scale(15)}
						/>
						<Skeleton
							animation="pulse"
							width="100%"
							height={30}
							style={{ marginBottom: SPACING.extra_large }}
						/>
						<Skeleton
							animation="pulse"
							width="100%"
							height={30}
							style={{ marginBottom: SPACING.extra_large }}
						/>
					</View>
					<View
						style={{
							borderBottomColor: COLORS.borderColor,
							borderBottomWidth: 2,
							paddingVertical: SPACING.small,
							paddingBottom: SPACING.extra_large,
						}}>
						<CommonHeading
							heading="Customer Reviews"
							headingType="mainHeading"
							color={COLORS.primary}
							fontSize={scale(15)}
						/>
						<Skeleton
							animation="pulse"
							width="100%"
							height={30}
							style={{ marginBottom: SPACING.extra_large }}
						/>
						<Skeleton
							animation="pulse"
							width="100%"
							height={30}
							style={{ marginBottom: SPACING.extra_large }}
						/>
					</View>
				</CommonWrapper>
			</ScrollView>
		</View>
	);
};

export default ProductDetailSkeleton;
