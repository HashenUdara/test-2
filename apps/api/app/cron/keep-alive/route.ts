import { database } from '@repo/database';
import { orm } from '@repo/database';
import { page } from '@repo/database/schema';

export const GET = async () => {
  // Insert a new page
  const [newPage] = await database
    .insert(page)
    .values({
      email: 'cron-temp@example.com',
      name: 'cron-temp',
    })
    .returning();

  // Delete the page
  await database.delete(page).where(orm.eq(page.id, newPage.id));

  return new Response('OK', { status: 200 });
};
