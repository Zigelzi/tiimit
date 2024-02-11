import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const userResponse = await fetch(
		'https://dummyjson.com/users?limit=20&select=firstName,lastName'
	);
	const users = await userResponse.json();
	return users;
};
