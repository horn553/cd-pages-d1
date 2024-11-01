import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const db = platform?.env.DB;
	if (!db) return { db: db };

	const result = await db.prepare('SELECT * FROM users LIMIT 5').run();
	return { db: db, result: result };
};
