import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const kv = platform?.env.KV;
	const db = platform?.env.DB;
	const undefinedObjects: string[] = [];
	if (!kv) undefinedObjects.push('KV');
	if (!db) undefinedObjects.push('DB');
	if (0 < undefinedObjects.length) return { success: false, undefinedObjects: undefinedObjects };

	const kvResult = await kv.list();
	const dbResult = await db.prepare('SELECT * FROM users LIMIT 5').run();
	return { success: true, kvResult: kvResult, dbResult: dbResult };
};
