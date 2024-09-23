import axios from 'axios';
import { BASE_API } from '../../Config';

export const getAllProductsList = async ({ skip = 0, limit = 10 }) => {
	const skipData = skip * limit;
	try {
		const response = await axios.get(
			`${BASE_API.URL}/products?limit=${limit}&skip=${skipData}`
		);
		return {
			products: response.data.products,
			total: response.data.total,
		};
	} catch (error) {
		console.error('Error fetching products:', error);
	}
};
