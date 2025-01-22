import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { keys } from './keys';
import * as schema from './schema';
export * as orm from 'drizzle-orm';
const client = neon(keys().DATABASE_URL);

export const database = drizzle({ client, schema });
