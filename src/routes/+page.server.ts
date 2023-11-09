import type { PageServerLoad } from './$types';
import { getNews } from '$lib/news';

export const load: PageServerLoad = ({ params }) => {
	return {
		news: getNews()
	};
};