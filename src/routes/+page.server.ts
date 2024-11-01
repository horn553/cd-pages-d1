import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const db = platform?.env.DB;
	if (!db) return {};

	const result = await db.prepare('SELECT * FROM users LIMIT 5').run();
	return { result: result };
};
