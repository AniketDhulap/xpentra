import axios from 'axios';
import { BASE_API } from '../../../Config';

export const fetchProductDetails = async (productId: number) => {
	try {
		const response = await fetch(`${BASE_API.URL}/products/${productId}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching products details:', error);
	}
};


